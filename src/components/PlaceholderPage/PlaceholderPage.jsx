import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby'
import PropTypes from 'prop-types';

import SEO from '../SEO';
import FullScreenLayout from '../FullScreenLayout';
import { HOME_PATH } from '../../utils/paths';

class PlaceholderPage extends Component {
  render() {
    const { title, altPath, altPathText} = this.props;
    return (
      <Fragment>
        <SEO title={title} />
        <FullScreenLayout style={{ lineHeight: 1.125 }}>
          <div style={{ fontSize: '4em', textAlign: 'center'}}>
            <Link to={HOME_PATH}>
              <strong>{title.toUpperCase()}</strong>
            </Link>
          </div>
          <div style={{ textAlign: 'center', fontSize: '1.25em'}}>
            <p>
              Coming soon. Meanwhile, browse my <a href={altPath}>{altPathText}</a>.
            </p>
          </div>
        </FullScreenLayout>
      </Fragment>
    );
  }
}

PlaceholderPage.propTypes = {
  title: PropTypes.string.isRequired,
  altPath: PropTypes.string.isRequired,
  altPathText: PropTypes.string.isRequired,
}


export default PlaceholderPage;
