import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { List } from "@material-ui/core";
import { TOCMenuItem, TOCTreeElem } from "./tocmenuitem";

//

export default () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: {fields: fields___chapter}) {
                edges {
                    node {
                        headings {
                            id
                            depth
                            value
                        }
                        fields {
                            slug
                            chapter
                        }
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `);

    const nodeTrees = data.allMarkdownRemark.edges.map(({ node }) => TOCTreeElem.fromResultNode(node));

    return (
        <List>
            {
                nodeTrees.map(nodeTree => (
                    <TOCMenuItem tree={nodeTree} key={nodeTree.url} />
                ))
            }
        </List>
    );
};

