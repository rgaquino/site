import React from 'react';

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
              fontSize: '150px',
              textAlign: 'center',
            }}
          >
            <strong>PHOTOS</strong>
          </div>
          <div
            style={{
              fontSize: '50px',
              textAlign: 'center',
            }}
          >
            <p>
              Coming soon. Meanwhile, browse my{' '}
              <a href="https://instagram.com/rgaquino">Instagram.</a>
            </p>
          </div>
        </FullScreenLayout>
      </div>
    );
  }
}

export default PhotosIndex;
