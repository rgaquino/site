import React from 'react';
import PlaceholderPage from '../components/PlaceholderPage';

import { INSTAGRAM_PATH } from '../utils/paths';

class PhotosIndex extends React.Component {
  render() {
    return (
      <PlaceholderPage 
        title="Photos"
        altPath={INSTAGRAM_PATH}
        altPathText="Instagram"
      />
    );
  }
}

export default PhotosIndex;
