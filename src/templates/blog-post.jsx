import React from 'react';
import { Link, graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';

import Layout from '../components/Layout';
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
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
           
            <Link to="/blog">
              <h1
                style={{
                  marginTop: rhythm(1),
                  marginBottom: 0,
                }}
              >
                {post.frontmatter.title}
              </h1>
            </Link>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <img src={post.frontmatter.hero.childImageSharp.original.src} />
          <section dangerouslySetInnerHTML={{ __html: post.html }}/>
          <footer/>
        </article>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
      </Layout>
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
            original {
              src
            }
          }
        }
      }
    }
  }
`;
