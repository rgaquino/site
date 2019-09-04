import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/SEO';

import '../css/styles.css';
import Intro from '../components/Intro';

class Index extends React.Component {
  render() {
    return (
      <div style={{
        // height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}>
        <SEO title="Home" />
        <div className="section">
          <Intro />
        </div>
      </div>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
