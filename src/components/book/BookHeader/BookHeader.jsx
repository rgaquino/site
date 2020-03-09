import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';

import LabelTag from '../../common/LabelTag/index';
import { rhythm } from '../../../utils/typography';

class BookHeader extends Component {
  render() {
    const { book, style } = this.props;
    const imageLink = `${process.env.BOOK_IMAGE_BASE_URL}/${book.slug}.jpg`;
    return (
      <Container style={style}>
        <Row style={{ paddingTop: rhythm(2) }}>
          <Col lg={4} offset={{ lg: 4 }} style={{ textAlign: "center" }}>
            <LabelTag value={book.lastFinishedAt} />
            <Link to={`/books`}>
              <img src={imageLink} alt={book.title} />
            </Link>
          </Col>
        </Row>
        <Row
          style={{
            paddingBottom: rhythm(2),
            textAlign: "center"
          }}
        >
          <Col lg={12}>
            <div
              style={{
                fontSize: "35px",
                lineHeight: 1,
                paddingBottom: rhythm(3 / 4)
              }}
            >
              <Link to={`/books`}>
                <strong>{book.title}</strong>
              </Link>
              <br />
              <span
                style={{
                  fontSize: "25px",
                  color: "#000"
                }}
              >
                <em>{book.subtitle}</em>
              </span>
            </div>
            <div>
              <span>{book.author}</span>
            </div>
          </Col>
        </Row>
        <hr />
      </Container>
    );
  }
}

BookHeader.propTypes = {
  book: PropTypes.object.isRequired,
  style: PropTypes.object,
};

export default BookHeader;
