import React from 'react';
import { Link, graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
import BackgroundImage from 'gatsby-background-image';
import { Container, Row, Col } from 'react-grid-system';

import SEO from '../components/SEO';
import { rhythm, scale } from '../utils/typography';

class BlogPostTemplate extends React.Component {

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { slug } = this.props.pageContext;

    // Disqus Configurations
    const disqusShortname = process.env.DISQUS_ID;
    const disqusConfig = {
      url: post.frontmatter.disqusURL ? post.frontmatter.disqusURL : `${process.env.BASE_URL}${slug}`,
      identifier: post.frontmatter.id,
      title: post.frontmatter.title,
    };

    return (
      <>
        <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
        <BackgroundImage
          Tag="section"
          fluid={post.frontmatter.hero.childImageSharp.fluid}
          backgroundColor={`#040e18`}
          style={{ 
            height: "70vh", 
            textAlign: "center", 
            marginBottom: rhythm(2)
          }}
        >
          <div style={{ 
            background: "rgba(0, 0, 0, 0.70)", 
            width: "100%", 
            height: "100%",             
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}>
            <Container>
              <Row>
                <Col md={12}>
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
                      {post.frontmatter.date}
                    </span>
                  </div>
                  <div style= {{
                      fontSize: "50px",
                      color: "#fff",
                      lineHeight: 1.125,
                      paddingBottom: rhythm(3/4),
                  }}>
                    <Link to="/blog" style={{ 
                        backgroundColor: "#fff", 
                        paddingLeft: "10px", 
                        paddingRight: "10px",
                      }}>
                        <strong>{post.frontmatter.title}</strong>
                    </Link>
                  </div>
                  <div style= {{
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        color: "#fff"
                    }}>
                    <em>{post.frontmatter.description}</em>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </BackgroundImage>
         <Container>
            <Row>
              <Col md={10} offset={{ md: 1 }}>
                <article>
                  <section dangerouslySetInnerHTML={{ __html: post.html }}/>
                  <footer/>
                </article>
                <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
              </Col>
            </Row>
        </Container>
      </>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160) 
      html
      frontmatter {
        id
        title
        date(formatString: "MMMM DD, YYYY")
        description
        disqusURL
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
`;
