import React from "react";
import { List } from "@material-ui/core";
import { useStaticQuery, graphql } from "gatsby";
import { TOCMenuItem, TOCTreeElem } from "./tocmenuitem";

//

export default () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: {fields: fields___chapter}, filter: {fields: {chapter: {ne: 0}}}) {
                edges {
                    node {
                        headings {
                            id
                            depth
                            value
                        }
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `);

    return (
        <List>
            {
                data.allMarkdownRemark.edges.map(({ node }) => {
                    const nodeTree = TOCTreeElem.fromResultNode(node);
                    return (
                        <TOCMenuItem tree={nodeTree} key={nodeTree.url}></TOCMenuItem>
                    );
                })
            }
        </List>
    );
};

