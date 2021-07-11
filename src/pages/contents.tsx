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
  }
`;

const Contents = ({ data }) => {
  console.log("data: ", data.allFile.nodes.map((item) => item.name)[0]);
  return (
    <main>
      <Link to="/">{data.site.siteMetadata.title}!</Link>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}!</li>
        ))}
      </ul>
    </main>
  );
};

export default Contents;
