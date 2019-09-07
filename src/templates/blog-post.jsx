import React from 'react';
import { Link, graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
import BackgroundImage from 'gatsby-background-image';
import { Container, Row, Col } from 'react-grid-system';

import { rhythm, scale } from '../utils/typography';
import SEO from '../components/SEO';
import BlogDate from '../components/BlogDate'
import Footer from '../components/Footer';

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
            height: "100vh", 
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
                  <BlogDate date={post.frontmatter.date} />
                  <div style= {{
                      fontSize: "60px",
                      color: "#fff",
                      lineHeight: 1.25,
                      paddingBottom: rhythm(3/4),
                  }}>
                    <Link to="/blog" style={{ 
                      backgroundColor: "#fff", 
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingBottom: "3px",
                      paddingTop: "3px",
                      boxDecorationBreak: "clone", 
                      WebkitBoxDecorationBreak: "clone",
                    }}>
                        <strong>{post.frontmatter.title}</strong>                        
                    </Link>
                  </div>
                  <div style= {{
                      color: "#fff",
                      fontSize: "20px"
                    }}
                  >
                    <p dangerouslySetInnerHTML={{__html: post.frontmatter.description }}/>
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
        <Footer />
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
        date(formatString: "DD MMMM YYYY")
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
