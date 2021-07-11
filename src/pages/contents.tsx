import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile {
      nodes {
        name
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`;

const Contents = ({ data }) => {
  console.log(
    "data: ",
    data.allMarkdownRemark.edges.map((node) => node.node.id)
  );
  return (
    <main>
      <Link to="/">{data.site.siteMetadata.title}</Link>
      <ul>
        {data.allMarkdownRemark.edges.map((edge) => (
          <React.Fragment key={edge.node.id}>
            <li>title: {edge.node.frontmatter.title}</li>
            <li>excerpt: {edge.node.excerpt}</li>
            <li>date: {edge.node.frontmatter.date}</li>
          </React.Fragment>
        ))}
      </ul>
    </main>
  );
};

export default Contents;
