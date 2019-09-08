import React from 'react';

import PlaceholderLayout from '../components/layout/PlaceholderLayout';

class NotFoundPage extends React.Component {
  render() {
    return (
      <PlaceholderLayout title="404 Not Found">
        That page doesn't exist yet.
      </PlaceholderLayout>
    );
  }
}

export default NotFoundPage;
