import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from "gatsby"
import { rhythm } from "../../utils/typography"

class BlogSummary extends Component {
    render() {
        const { node } = this.props
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
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
        )
    }
}

BlogSummary.propTypes = {
    node: PropTypes.object.isRequired
}

export default BlogSummary;