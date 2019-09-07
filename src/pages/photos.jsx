import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/SEO';
import FullScreenLayout from '../components/FullScreenLayout';

class PhotosIndex extends React.Component {
  render() {
    return (
      <div>
        <SEO title="Photos" />
        <FullScreenLayout style={{ lineHeight: 1.125 }}>
          <div
            style={{
              fontSize: '75px',
              textAlign: 'center',
            }}
          >
            <Link to="/">
              <strong>PHOTOS</strong>
            </Link>
          </div>
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <p>
              Coming soon. Meanwhile, follow me on{' '}
              <a href="https://instagram.com/rgaquino">Instagram.</a>
            </p>
          </div>
        </FullScreenLayout>
      </div>
    );
  }
}

export default PhotosIndex;
