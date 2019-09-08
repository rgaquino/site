import React from 'react';
import PlaceholderLayout from '../components/layout/PlaceholderLayout';

import { BOOKS_PATH } from '../utils/paths';

class BooksIndex extends React.Component {
  render() {
    return (
      <PlaceholderLayout title="Books">
        <p>
          Coming soon. <br/>
          Meanwhile, browse my <a href={BOOKS_PATH}>reading list</a>.
        </p>
      </PlaceholderLayout>
    );
  }
}

export default BooksIndex;
