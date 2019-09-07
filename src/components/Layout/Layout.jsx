import React from 'react';

import { rhythm } from '../../utils/typography';

import { Container, Row, Col } from 'react-grid-system';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Container>
        <Row>
          <Col md={12}>
            <main>{children}</main>
            <footer style={{ textAlign: 'center', marginTop: rhythm(2) }}>
              © {new Date().getFullYear()} Ralph Gregor Aquino
            </footer>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Layout;
