import React from 'react';
import PlaceholderPage from '../components/layout/PlaceholderPage';

import { INSTAGRAM_PATH } from '../utils/paths';

class PhotosIndex extends React.Component {
  render() {
    return (
      <PlaceholderPage title="Photos">
        <p>
          Coming soon.<br/>
          Meanwhile, browse my <a href={INSTAGRAM_PATH}>Instagram</a>.
        </p>
      </PlaceholderPage>
    );
  }
}

export default PhotosIndex;
