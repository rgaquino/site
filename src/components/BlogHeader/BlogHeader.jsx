import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';

import BlogDate from '../BlogDate';
import { rhythm } from '../../utils/typography';

class BlogHeader extends Component {
  render() {
    const { post } = this.props;
    return (
      <Container>
        <Row>
          <Col md={12}>
            <BlogDate date={post.frontmatter.date} />
            <div style= {{
                fontSize: "60px",
                color: "#fff",
                lineHeight: 1.25,
                paddingBottom: rhythm(3/4),
            }}>
              <Link to="/blog" style={{ 
                backgroundColor: "#fff", 
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "3px",
                paddingTop: "3px",
                boxDecorationBreak: "clone", 
                WebkitBoxDecorationBreak: "clone",
              }}>
                  <strong>{post.frontmatter.title}</strong>                        
              </Link>
            </div>
            <div style= {{
                color: "#fff",
                fontSize: "20px"
              }}
            >
              <p dangerouslySetInnerHTML={{__html: post.frontmatter.description }}/>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

BlogHeader.propTypes = {
  post: PropTypes.object.isRequired,
}

export default BlogHeader;
