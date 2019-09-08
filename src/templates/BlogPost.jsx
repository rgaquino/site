import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import Footer from '../components/Footer';
import FullScreenImageLayout from '../components/FullScreenImageLayout';
import BlogHeader from '../components/BlogHeader';
import BlogContent from '../components/BlogContent';

import { rhythm } from '../utils/typography';

class BlogPost extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    return (
      <Fragment>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <FullScreenImageLayout
          image={post.frontmatter.hero.childImageSharp.fluid}
          overlay="rgba(0, 0, 0, 0.70)"
        >
          <BlogHeader post={post} />
        </FullScreenImageLayout>
        <BlogContent
          post={post}
          style={{
            marginTop: rhythm(2),
          }}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default BlogPost;

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
