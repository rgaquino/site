import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { rhythm } from '../../../utils/typography';

import LabelTag from '../../common/LabelTag';

class BookListItem extends Component {
  render() {
    const book = this.props.book;
    const imageLink = `${process.env.BOOK_IMAGE_BASE_URL}/${book.slug}.jpg`;
    return (
      <Row>
        <Col lg={3} sm={6} style={{ textAlign: 'center', paddingTop: rhythm(1.25) }}>
          <LabelTag value={book.lastFinishedAt} />
          <Link to={`/books/${book.slug}`}>
            <img src={imageLink} style={{ objectFit: 'cover ', height: 285 }} />
          </Link>
          <div>
            <Link to={`/books/${book.slug}`}>
              <strong>{book.title}</strong>
            </Link>
            <p>{book.author}</p>
          </div>
        </Col>
      </Row>
    );
  }
}

BookListItem.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookListItem;
