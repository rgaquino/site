import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DiscussionEmbed } from 'disqus-react';
import { Container, Row, Col } from 'react-grid-system';

class BlogContent extends Component {
  render() {
    const { post, style } = this.props;

    // Disqus Configurations
    const disqusShortname = process.env.DISQUS_ID;
    const disqusConfig = {
      url: post.frontmatter.disqusURL
        ? post.frontmatter.disqusURL
        : `${process.env.BASE_URL}/blog/${post.frontmatter.id}`,
      identifier: post.frontmatter.id,
      title: post.frontmatter.title,
    };

    return (
      <Container style={style}>
        <Row>
          <Col lg={10} offset={{ lg: 1 }}>
            <article>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
          </Col>
        </Row>
        <Row>
          <Col lg={10} offset={{ lg: 1 }}>
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

BlogContent.propTypes = {
  post: PropTypes.object.isRequired,
  style: PropTypes.object,
};

export default BlogContent;
