import React from 'react';
import PlaceholderPage from '../components/PlaceholderPage';

import { INSTAGRAM_PATH } from '../utils/paths';

class PhotosIndex extends React.Component {
  render() {
    return (
      <PlaceholderPage title="Photos">
        Coming soon. Meanwhile, browse my <a href={INSTAGRAM_PATH}>Instagram</a>
        .
      </PlaceholderPage>
    );
  }
}

export default PhotosIndex;
