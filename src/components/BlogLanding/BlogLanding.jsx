import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';
import PropTypes from 'prop-types';

import BlogList from '../BlogList';
import { rhythm } from '../../utils/typography';

class BlogLanding extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={12}>
            <div style={{ textAlign: 'center' }}>
              <Link to="/blog">
                <span style={{ fontSize: '40px' }}>
                  <strong>BLOG</strong>
                </span>
              </Link>
              <p>
                I'm using this website as a command center for my
                digital life and as a way to learn new tech as they
                come. I'm calling it{' '}
                <Link to="/blog/introducing-rocinante">
                  <strong>The Rocinante Project</strong>
                </Link>
                , with the end goal of having expertise on multiple web
                development stacks and not get overwhelmed by how much
                there is to learn. I'm <Link to="/blog">blogging</Link>{' '}
                about the steps of building this website from design to
                implementation to both track my progress and as a way
                for others to learn from them. I believe in the value of
                not erasing our own learning arc by never feigning
                perfection.
              </p>
            </div>
            <div>
              <BlogList posts={this.props.posts} />
            </div>
            <div
              style={{ textAlign: 'center', paddingBottom: rhythm(2) }}
            >
              <Link to="/blog">
                <strong>[ view more posts ]</strong>
              </Link>
            </div>
          </Col>
        </Row>
    </Container>
    );
  }
}

BlogLanding.propTypes = {
  posts: PropTypes.object.isRequired,
}

export default BlogLanding;