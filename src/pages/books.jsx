import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/SEO';
import FullScreenLayout from '../components/FullScreenLayout';
import { READING_LIST_PATH, HOME_PATH } from '../utils/paths';

class BooksIndex extends React.Component {
  render() {
    return (
      <div>
        <SEO title="Books" />
        <FullScreenLayout style={{ lineHeight: 1.125 }}>
          <div
            style={{
              fontSize: '4em',
              textAlign: 'center',
            }}
          >
            <Link to={HOME_PATH}>
              <strong>BOOKS</strong>
            </Link>
          </div>
          <div
            style={{
              textAlign: 'center',
              fontSize: '1.25em'
            }}
          >
            <p>
              Coming soon. Meanwhile, browse my{' '}
              <a href={READING_LIST_PATH}>reading list.</a>
            </p>
          </div>
        </FullScreenLayout>
      </div>
    );
  }
}

export default BooksIndex;
