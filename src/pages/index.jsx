import React from 'react'
import { graphql, Link } from 'gatsby'
import ReactFullpage from '@fullpage/react-fullpage'

import Hero from '../components/Hero'
import SEO from '../components/SEO'

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

    return (
      <ReactFullpage
        scrollOverflow={true}
        scrollingSpeed={1000}
        sectionsColor={['#bbb', 'purple', 'green']}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <SEO title="Home" />
              <div className="section">
                <Hero />
                {/* <ul>
                  <li>
                    <Link to="/blog">blog</Link>
                  </li>
                  <li>
                    <Link to="/">books (coming soon)</Link>
                  </li>
                  <li>
                    <a href="https://instagram.com/rgaquino">
                      photos (coming soon)
                    </a>
                  </li>
                  <li>
                    <Link to="/">notes (coming soon)</Link>
                  </li>
                </ul> */}
              </div>
              <div className="section">
                <div className="slide">
                  <h2>BLOG</h2>
                </div>
                <div className="slide">
                  <h2>PHOTOS</h2>
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
  }
`
