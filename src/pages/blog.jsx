import React from 'react';
import { Link, graphql } from 'gatsby';

import SEO from '../components/SEO';
import { Container, Row, Col } from 'react-grid-system';

import Footer from '../components/Footer';
import BlogList from '../components/BlogList';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <SEO title="Blog" />
        <Container>
          <Row>
            <Col lg={12} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '150px' }}>
                <Link to="/">
                  <strong>BLOG</strong>
                </Link>
              </div>
              <p>
                I'm using this website as a command center for my digital life
                and as a way to learn new tech as they come. I'm calling it{' '}
                <Link to="/blog/introducing-rocinante">
                  <strong>The Rocinante Project</strong>
                </Link>
                , with the end goal of having expertise on multiple web
                development stacks and not get overwhelmed by how much there is
                to learn. I'm <Link to="/blog">blogging</Link> about the steps
                of building this website from design to implementation to both
                track my progress and as a way for others to learn from them. I
                believe in the value of not erasing our own learning arc by
                never feigning perfection.
              </p>
            </Col>
          </Row>
          <hr />
          <BlogList posts={data.allMarkdownRemark.edges} />
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
