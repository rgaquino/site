import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';

import BlogLanding from '../BlogLanding';
import BooksLanding from '../BooksLanding';
import PhotosLanding from '../PhotosLanding';
import ExtraLanding from '../ExtraLanding';

import { rhythm } from '../../../utils/typography';

class LandingPages extends Component {
  render() {
    const { data } = this.props;

    // TODO: These rows should be rendered automatically by looping all the pages.
    return (
      <Container id="content">
        <Row style={{ paddingBottom: rhythm(2), paddingTop: rhythm(2) }}>
          <Col lg={12}>
            <BlogLanding posts={data.allMarkdownRemark.edges} />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <hr />
          </Col>
        </Row>
        <Row style={{ paddingBottom: rhythm(2), paddingTop: rhythm(1) }}>
          <Col lg={12}>
            <BooksLanding
              image={data.sampleBook.childImageSharp.fluid}
              title="Commonwealth"
              author="Ann Patchett"
              highlight="There's no protecting anyone. Keeping people safe is a story we tell ourselves."
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <hr />
          </Col>
        </Row>
        <Row style={{ paddingBottom: rhythm(2), paddingTop: rhythm(1) }}>
          <Col lg={12}>
            <PhotosLanding
              image={data.samplePhoto.childImageSharp.fluid}
              caption="fish as deep down as possible — understand"
              date="August 2019"
              location="Sydney, Australia"
              gear="Sony a6000 / Sigma 3.5mm f1.4 DC DN"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <hr />
          </Col>
        </Row>
        <Row style={{ paddingTop: rhythm(1) }}>
          <Col lg={12}>
            <ExtraLanding />
          </Col>
        </Row>
      </Container>
    );
  }
}

LandingPages.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LandingPages;
