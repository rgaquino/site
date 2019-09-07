import React from 'react';
import { Link, graphql } from 'gatsby';

import Intro from '../components/Intro';

import SEO from '../components/SEO';
import { rhythm } from '../utils/typography';
import BackgroundImage from 'gatsby-background-image';
import { Container, Row, Col } from 'react-grid-system';
import Image from 'gatsby-image';


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <div>
        <SEO title="Blog" />
        <Container>
          <Row>
            <Col md={12}>
              <div style={{
                  fontSize: "200px",
                  textAlign: "center"
                }}>
                  <strong>BLOG</strong>                       
              </div>
            </Col>
          </Row>
          {posts.map(({ node }) => {
          return (
            <Row style={{ paddingTop: rhythm(2)}}>
              <Col md={4}>
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingBottom: rhythm(1),
                }}>
                  <Image fluid={node.frontmatter.hero.childImageSharp.fluid} />
                </div>
              </Col>
              <Col md={8}>
                <div style= {{
                      paddingBottom: rhythm(1),
                      color: "#fff"
                  }}
                >
                  <span style={{ 
                      backgroundColor: "#242424", 
                      padding: "10px", 
                    }}
                  >
                    {node.frontmatter.date}
                  </span>
                </div>
                <div style= {{
                    fontSize: "30px",
                    color: "#fff",
                    lineHeight: 1.25,
                    paddingBottom: rhythm(3/4),
                }}>
                  <Link to={`/blog/${node.frontmatter.id}`}>
                      <strong>{node.frontmatter.title}</strong>                        
                  </Link>
                </div>
                <div>
                  <p dangerouslySetInnerHTML={{__html: node.frontmatter.description || node.excerpt }}/>
                </div>
              </Col>
            </Row>
          );
        })}
        </Container>
        <div>
          <footer style={{
            textAlign: "center", 
            marginTop: rhythm(3/2),
            marginBottom: rhythm(1),
          }}>
            © {new Date().getFullYear()} Ralph Gregor Aquino
          </footer>
        </div>
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
            date(formatString: "MMMM DD, YYYY")
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
