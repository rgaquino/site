import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';

import LabelTag from '../../common/LabelTag/index';
import Arrow from '../../common/Arrow/index';
import { rhythm } from '../../../utils/typography';
import { BLOG_PATH } from '../../../utils/paths';

class BlogHeader extends Component {
  render() {
    const { post } = this.props;
    return (
      <Container>
        <Row>
          <Col lg={12}>
            <LabelTag value={post.frontmatter.date} />
            <div
              style={{
                fontSize: '5vmin',
                color: '#fff',
                lineHeight: 1.25,
                paddingBottom: rhythm(3 / 4),
              }}
            >
              <Link
                to={BLOG_PATH}
                style={{
                  backgroundColor: '#fff',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  paddingBottom: '2.5px',
                  paddingTop: '2.5px',
                  boxDecorationBreak: 'clone',
                  WebkitBoxDecorationBreak: 'clone',
                }}
              >
                <strong>{post.frontmatter.title}</strong>
              </Link>
            </div>
            <div
              style={{
                color: '#fff',
                fontSize: '1.25em',
              }}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description,
                }}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Arrow />
          </Col>
        </Row>
      </Container>
    );
  }
}

BlogHeader.propTypes = {
  post: PropTypes.object.isRequired,
};

export default BlogHeader;
