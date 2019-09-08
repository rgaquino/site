import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Arrow from '../Arrow';

class Intro extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={12}>
            <div style={{ fontSize: '8em'}}>
              <strong>Hi, I'm RG.</strong>
            </div>
            <p style={{ fontSize: '20px' }}>
              I'm a Software Engineer based in Singapore currently writing
                backend code for{' '}
                <a href="https://github.com/eatigo"><strong>Eatigo</strong></a>. Nowadays I
                write mostly in Go and JavaScript. Previously, I worked on
                financial web applications built using Java.
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
