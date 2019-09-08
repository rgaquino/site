import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Arrow from '../../common/Arrow/index';
import { WORK_PATH } from '../../../utils/paths';

class Intro extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={12}>
            <div style={{ fontSize: '15vmin' }}>
              <strong>Hi, I'm RG.</strong>
            </div>
            <p style={{ fontSize: '1.25em' }}>
              I'm a Software Engineer based in Singapore currently writing
              backend code for{' '}
              <a href={WORK_PATH}>
                <strong>Eatigo</strong>
              </a>
              . Nowadays I write mostly in Go and JavaScript. Previously, I
              worked on financial web applications built using Java.
            </p>
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

export default Intro;
