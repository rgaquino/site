import React from 'react';
import { Link, graphql } from 'gatsby';

import SEO from '../components/SEO';
import { Container, Row, Col } from 'react-grid-system';

import Footer from '../components/Footer';
import BlogList from '../components/BlogList';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    return (
      <div>
        <SEO title="Blog" />
        <Container>
          <Row>
            <Col md={12}>
              <div style={{
                  fontSize: '200px',
                  textAlign: "center"
                }}>
                  <strong>BLOG</strong>                       
              </div>
            </Col>
          </Row>
          <BlogList posts= {data.allMarkdownRemark.edges} />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default BlogIndex;

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
