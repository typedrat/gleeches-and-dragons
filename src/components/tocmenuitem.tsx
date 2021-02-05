import * as React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { Map } from "immutable";


type Heading = {
    id: string,
    depth: number,
    value: string
}

type GraphQLQueryResultNode = {
    headings: Heading[],
    fields: {
        slug: string,
        chapter: number
    },
    frontmatter: {
        title: string
    }
}

export function checkHeadingListUnique({ fields: { slug }, headings }: GraphQLQueryResultNode): boolean {
    const appearanceMap = headings.reduce((state, heading) =>
        state.update(heading.value, 0, x => x + 1)
    , Map<string, number>());

    const dupMap = appearanceMap.filter(v => v > 1);

    if (!dupMap.isEmpty()) {
        throw new Error(`Repeated headings in chapter '${slug}': ${dupMap}`);
    }

    return true;
}

export class TOCTreeElem {
    title: string;
    url: string;
    depth: number;
    children: TOCTreeElem[];

    constructor(title: string, url: string, depth: number) {
        this.title = title;
        this.url = url;
        this.depth = depth;
        this.children = [];
    }

    static fromResultNode(node: GraphQLQueryResultNode): TOCTreeElem {
        checkHeadingListUnique(node);

        const url = node.fields.chapter == 0 ? '/' : node.fields.slug;

        let parentNode = new TOCTreeElem(node.frontmatter.title, url, 1);

        function addNodeToTree(tree: TOCTreeElem, child: Heading) {
            if (tree.depth < child.depth - 1 && tree.children.length > 0) {
                addNodeToTree(tree.children[tree.children.length - 1], child);
                return;
            }

            tree.children.push(new TOCTreeElem(child.value, `${parentNode.url}#${child.id}`, child.depth));
        }

        for (const heading of node.headings) {
            addNodeToTree(parentNode, heading);
        }

        return parentNode;
    }
}

export class TOCMenuItem extends React.Component<{ tree: TOCTreeElem, key: string }, { isExpanded: boolean }> {
    title: string;
    url: string;
    children: TOCTreeElem[];
    constructor(props) {
        super(props);
        this.state = { isExpanded: false };
    }

    handleToggleExpand() {
        const { isExpanded } = this.state;
        this.setState({ isExpanded: !isExpanded });
    }

    render() {
        let expandableToggle: React.ReactNode = null;
        let expandableContent: React.ReactNode = null;

        if (this.props.tree.children.length > 0) {
            expandableToggle = (
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="toggle-expand" onClick={this.handleToggleExpand.bind(this)}>
                        { this.state.isExpanded ? <ExpandLess /> : <ExpandMore /> }
                    </IconButton>
                </ListItemSecondaryAction>
            );

            expandableContent = (
                <Collapse in={ this.state.isExpanded } style={{ paddingLeft: 20 }} unmountOnExit>
                    <List component="ul" disablePadding>
                        {
                            this.props.tree.children.map( child => (
                                <TOCMenuItem tree={ child } key={ child.url } />
                            ))
                        }
                    </List>
                </Collapse>
            );
        }

        return (
            <>
                <ListItem button component={ AnchorLink } to={ this.props.tree.url }>
                    <ListItemText primary={ this.props.tree.title } />
                    { expandableToggle }
                </ListItem>
                { expandableContent }
            </>
        );
    }
}


