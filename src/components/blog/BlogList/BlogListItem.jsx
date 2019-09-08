import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../../../utils/typography';

import LabelTag from '../../common/LabelTag/index';

class BlogListItem extends Component {
  render() {
    const post = this.props.post;
    return (
      <Row style={{ paddingTop: rhythm(2) }}>
        <Col lg={5}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              paddingBottom: rhythm(1),
              height: '100%',
            }}
          >
            <Image fluid={{ 
              ...post.frontmatter.hero.childImageSharp.fluid, 
              aspectRatio: 16 / 9
            }} />
          </div>
        </Col>
        <Col lg={7}>
          <LabelTag value={post.frontmatter.date} />
          <div
            style={{
              fontSize: '30px',
              color: '#fff',
              lineHeight: 1.25,
              paddingBottom: rhythm(3 / 4),
            }}
          >
            <Link to={`/blog/${post.frontmatter.id}`}>
              <strong>{post.frontmatter.title}</strong>
            </Link>
          </div>
          <div>
            <p
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }}
            />
          </div>
        </Col>
      </Row>
    );
  }
}

BlogListItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default BlogListItem;
