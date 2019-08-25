import React from 'react';
import { graphql, Link } from 'gatsby';
import ReactFullpage from '@fullpage/react-fullpage';

import SEO from '../components/SEO';

import '../css/styles.css';
import Intro from '../components/Intro';

class Index extends React.Component {
  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        scrollingSpeed={1000}
        sectionsColor={['#e2e4e2', '#afaae1']}
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <SEO title="Home" />
              <div className="section">
                <Intro />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
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
