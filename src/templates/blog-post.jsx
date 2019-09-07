import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
import { Container, Row, Col } from 'react-grid-system';

import { rhythm, scale } from '../utils/typography';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import FullScreenImageLayout from '../components/FullScreenImageLayout/FullScreenImageLayout';
import BlogHeader from '../components/BlogHeader';

class BlogPostTemplate extends React.Component {

  render() {
    const post = this.props.data.markdownRemark;
    const { slug } = this.props.pageContext;

    // Disqus Configurations
    const disqusShortname = process.env.DISQUS_ID;
    const disqusConfig = {
      url: post.frontmatter.disqusURL ? post.frontmatter.disqusURL : `${process.env.BASE_URL}${slug}`,
      identifier: post.frontmatter.id,
      title: post.frontmatter.title,
    };

    return (
      <Fragment>
        <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
        <FullScreenImageLayout 
          image={post.frontmatter.hero.childImageSharp.fluid}
          overlay="rgba(0, 0, 0, 0.70)"
        >
          <BlogHeader post={post} />
        </FullScreenImageLayout>
        <Container style={{
           marginTop: rhythm(2)
         }}>
            <Row>
              <Col md={10} offset={{ md: 1 }}>
                <article>
                  <section dangerouslySetInnerHTML={{ __html: post.html }}/>
                </article>
                
              </Col>
            </Row>
            <Row>
              <Col md={10} offset={{ md: 1 }}>
                <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
              </Col>
            </Row>
        </Container>
        <Footer />
      </Fragment>
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
