import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/SEO';
import FullScreenLayout from '../components/FullScreenLayout';
import Footer from '../components/Footer';

class BooksIndex extends React.Component {
  render() {
    const { data } = this.props;
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
            <Link to="/">
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
              <a href="https://trello.com/b/0SUpWrLd">reading list.</a>
            </p>
          </div>
        </FullScreenLayout>
      </div>
    );
  }
}

export default BooksIndex;
