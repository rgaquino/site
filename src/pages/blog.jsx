import React from 'react';
import { Link, graphql } from 'gatsby';

import Hero from '../components/Hero';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { rhythm } from '../utils/typography';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />
        <Hero />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title;
          return (
            <div>
                <article key={node.frontmatter.id}>       
                  <header>
                    <h3 style={{ marginBottom: rhythm(1 / 4) }}>
                      <Link style={{ boxShadow: `none` }} to={`/blog/${node.frontmatter.id}`}>
                        {title}
                      </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </section>
                </article>
            </div>
          );
        })}
      </Layout>
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
