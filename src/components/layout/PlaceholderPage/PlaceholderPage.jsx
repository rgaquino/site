import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import SEO from '../../common/SEO';
import FullScreenLayout from '../../layout/FullScreenLayout';
import { HOME_PATH } from '../../../utils/paths';

class PlaceholderPage extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <Fragment>
        <SEO title={title} />
        <FullScreenLayout style={{ lineHeight: 1.125 }}>
          <div style={{ fontSize: '4em', textAlign: 'center' }}>
            <Link to={HOME_PATH}>
              <strong>{title.toUpperCase()}</strong>
            </Link>
          </div>
          <div style={{ textAlign: 'center', fontSize: '1.25em' }}>
            {children}
          </div>
        </FullScreenLayout>
      </Fragment>
    );
  }
}

PlaceholderPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PlaceholderPage;
