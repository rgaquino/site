import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';

import SEO from '../components/SEO';
import { rhythm } from '../utils/typography';

import '../css/styles.css';
import Intro from '../components/Intro';

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <SEO />

          <Intro />
        </div>
      </>
    );
  }
}

export default Index;

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `;

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
          frontmatter {
            id
            date(formatString: "MMMM DD, YYYY")
            title
            description
            hero {
              childImageSharp {
                resize(width: 300) {
                  src
                }
                original {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
