import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import { ROCI_SOURCE_PATH } from '../../utils/paths';

class ExtraLanding extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={12}>
            <div style={{ textAlign: 'center' }}>
              <p>
                I'm aiming to have all of my socials to be aggregated and
                displayed on this website. It is currently in active development
                and you can find the source code{' '}
                <a href={ROCI_SOURCE_PATH}>here</a>. For the meantime, if you're
                interested in working with me send a message or follow me on
                any of the links below.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ExtraLanding;
