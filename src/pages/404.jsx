import React from 'react';

import PlaceholderPage from '../components/PlaceholderPage';

import { HOME_PATH } from '../utils/paths';

class NotFoundPage extends React.Component {
  render() {
    return (
      <PlaceholderPage title="404 Not Found">
        That page doesn't exist yet.
      </PlaceholderPage>
    );
  }
}

export default NotFoundPage;
