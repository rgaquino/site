import React from 'react';
import PlaceholderPage from '../components/layout/PlaceholderPage';

import { BOOKS_PATH } from '../utils/paths';

class BooksIndex extends React.Component {
  render() {
    return (
      <PlaceholderPage title="Books">
        Coming soon. Meanwhile, browse my <a href={BOOKS_PATH}>reading list</a>.
      </PlaceholderPage>
    );
  }
}

export default BooksIndex;
