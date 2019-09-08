import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/SEO';
import FullScreenLayout from '../components/FullScreenLayout';

import { INSTAGRAM_PATH, HOME_PATH } from '../utils/paths';

class PhotosIndex extends React.Component {
  render() {
    return (
      <div>
        <SEO title="Photos" />
        <FullScreenLayout style={{ lineHeight: 1.125 }}>
          <div
            style={{
              fontSize: '4em',
              textAlign: 'center',
            }}
          >
            <Link to={HOME_PATH}>
              <strong>PHOTOS</strong>
            </Link>
          </div>
          <div
            style={{
              textAlign: 'center',
              fontSize: '1.25em'
            }}
          >
            <p>
              Coming soon. Meanwhile, follow me on{' '}
              <a href={INSTAGRAM_PATH}>Instagram.</a>
            </p>
          </div>
        </FullScreenLayout>
      </div>
    );
  }
}

export default PhotosIndex;
