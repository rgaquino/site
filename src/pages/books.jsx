import React from 'react';
import PlaceholderPage from '../components/PlaceholderPage';

import { BOOKS_PATH } from '../utils/paths';

class BooksIndex extends React.Component {
  render() {
    return (
        <PlaceholderPage 
          title="Books"
          altPath={BOOKS_PATH}
          altPathText="reading list"
        />
    );
  }
}

export default BooksIndex;
