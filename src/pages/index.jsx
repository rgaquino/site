import React from 'react'
import { graphql, Link } from 'gatsby'
import ReactFullpage from '@fullpage/react-fullpage'

import BlogSummary from '../components/BlogSummary'
import SEO from '../components/SEO'
import Photo from '../components/Photo'

import '../css/styles.css'

class BlogIndex extends React.Component {
  onLeave(origin, destination, direction) {
    console.log('Leaving section ' + origin.index)
  }

  afterLoad(origin, destination, direction) {
    console.log('After load: ' + destination.index)
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <ReactFullpage
        scrollOverflow={true}
        scrollingSpeed={1000}
        sectionsColor={['#bbb', '#afaae1', '#bbb']}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <SEO title="Home" />
              <div className="section">
                <Link to="/">
                  <h1>Hi, I'm RG.</h1>
                </Link>
                <p>I'm a Software Engineer based in Singapore writing backend code for <a href="https://eatigo.com">@eatigo</a>. I write mostly in Go and JavaScript, previously (and now shunning) Java.</p>
                </div>
              <div className="section">
                <h2>BLOG</h2>
                {posts.map(({ node }) => (
                  <BlogSummary node={node} />
                ))}
              </div>
              <div className="section">
                <div className="slide">
                  <Photo />
                </div>
                <div className="slide">
                  <h2>test-photo1</h2>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    )
  }
}

export default BlogIndex

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
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`