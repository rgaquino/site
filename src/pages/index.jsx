import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/common/SEO';
import FullScreenLayout from '../components/layout/FullScreenLayout';

import Footer from '../components/common/Footer';
import Intro from '../components/landing/Intro';
import LandingPages from '../components/landing/LandingPages';

class Index extends React.Component {
  render() {
    return (
      <Fragment>
        <SEO />
        <FullScreenLayout
          style={{
            textAlign: 'center',
            backgroundColor: '#242424',
            color: '#fff',
          }}
        >
          <Intro />
        </FullScreenLayout>
        <LandingPages data={this.props.data} />
        <Footer />
      </Fragment>
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
    samplePhoto: file(relativePath: { eq: "sydney.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sampleBook: file(relativePath: { eq: "a-promised-land-barack-obama.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            id
            date(formatString: "DD MMMM YYYY")
            title
            description
            hero {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
