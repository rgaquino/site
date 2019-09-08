import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import SEO from '../../common/SEO';
import FullScreenLayout from '../../layout/FullScreenLayout';
import { HOME_PATH } from '../../../utils/paths';
import { Container, Row, Col } from 'react-grid-system';

class PlaceholderLayout extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <Fragment>
        <SEO title={title} />
        <FullScreenLayout style={{ lineHeight: 1.125 }}>
          <Container>
            <Row>
              <Col lg={12}>
                <div style={{ fontSize: '8vmin', textAlign: 'center' }}>
                  <Link to={HOME_PATH}>
                    <strong>{title.toUpperCase()}</strong>
                  </Link>
                </div>
                <div style={{ textAlign: 'center', fontSize: '1.25em' }}>
                  {children}
                </div>
              </Col>
            </Row>
          </Container>
        </FullScreenLayout>
      </Fragment>
    );
  }
}

PlaceholderLayout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PlaceholderLayout;
