import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import React from "react";
import { FC } from "react";

interface NewContentsProps {}

const NewContents: FC<NewContentsProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              templateKey
              date
              featuredpost
              description
              tags
            }
            html
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <div>
      {data.allMarkdownRemark.edges.map((item, idx) => {
        return (
          <div key={idx}>
            <div>{item.node.frontmatter.title}</div>
            <div dangerouslySetInnerHTML={{ __html: item.node.html }}></div>
          </div>
        );
      })}
    </div>
  );
};

export default NewContents;
