import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import BookListItem from './BookListItem';

class BookList extends Component {
  render() {
    return (
      <Fragment>
        {this.props.books.map(({ node }) => {
          return <BookListItem key={node.slug} book={node} />;
        })}
      </Fragment>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.object.isRequired,
};

export default BookList;
