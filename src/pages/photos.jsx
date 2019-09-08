import React from 'react';
import PlaceholderLayout from '../components/layout/PlaceholderLayout';

import { INSTAGRAM_PATH } from '../utils/paths';

class PhotosIndex extends React.Component {
  render() {
    return (
      <PlaceholderLayout title="Photos">
        <p>
          Coming soon.<br/>
          Meanwhile, browse my <a href={INSTAGRAM_PATH}>Instagram</a>.
        </p>
      </PlaceholderLayout>
    );
  }
}

export default PhotosIndex;
