import React from 'react';

import SEO from '../components/SEO';
import FullScreenLayout from '../components/FullScreenLayout';

class BooksIndex extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <SEO title="Books" />
        <FullScreenLayout style={{ lineHeight: 1.125 }}>
           <div style={{
                fontSize: '150px',
                textAlign: 'center',
              }}
            >
              <strong>BOOKS</strong>
          </div>
          <div style={{
              fontSize: '50px',
              textAlign: 'center',
            }}
          >
              <p>Coming soon. Meanwhile, browse my <a href='https://trello.com/b/0SUpWrLd'>reading list.</a></p>
          </div>
 
        </FullScreenLayout>
      </div>
    );
  }
}

export default BooksIndex;