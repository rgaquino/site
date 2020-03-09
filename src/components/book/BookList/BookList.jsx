import React, { Component } from 'react';
import { Row } from 'react-grid-system';
import PropTypes from 'prop-types';

import BookListItem from './BookListItem';

class BookList extends Component {
  render() {
    return (
      <Row>
        {this.props.books.map(({ node }) => {
          return <BookListItem key={node.slug} book={node} />;
        })}
      </Row>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.object.isRequired,
};

export default BookList;
