import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Arrow from '../../common/Arrow/index';
import { EATIGO_PATH, XENDIT_PATH } from '../../../utils/paths';

class Intro extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={12}>
            <div style={{ fontSize: '12vmin' }}>
              <strong>Hi, I'm RG.</strong>
            </div>
            <p style={{ fontSize: '1.25em' }}>
              I'm a Software Engineer based in Singapore currently writing
              code for <a href={XENDIT_PATH}><strong>Xendit</strong></a>.<br/>
              Previously, I led the backend team at <a href={EATIGO_PATH}><strong>Eatigo</strong></a>.
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
