import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';

import { rhythm } from '../../../utils/typography';

class BookContent extends Component {
  render() {
    const { book, style } = this.props;
    let highlights;
    if (book.highlights != null) {
      highlights = (
        <Row>
          <Col lg={10} offset={{ lg: 1 }}>
            <h1>Highlights</h1>
            {book.highlights.map((highlight, idx) => {
              let sep;
              if (idx !== book.highlights.length - 1) {
                sep = (
                  <div
                    style={{
                      fontSize: "1.25em",
                      textAlign: "center",
                      paddingTop: rhythm(3 / 4),
                      paddingBottom: rhythm(3 / 4)
                    }}
                  >
                    <span>. . .</span>
                  </div>
                );
              }
              return (
                <Fragment>
                  <div>
                    <article>
                      <section
                        dangerouslySetInnerHTML={{ __html: highlight }}
                      />
                    </article>
                  </div>
                  {sep}
                </Fragment>
              );
            })}
          </Col>
        </Row>
      );
    }

    let notes;
    if (book.notes != null) {
      notes = (
        <Row>
          <Col lg={10} offset={{ lg: 1 }}>
            <h1>Notes</h1>
            <div>
              <article>
                <section
                  dangerouslySetInnerHTML={{ __html: book.notes }}
                />
              </article>
            </div>
          </Col>
        </Row>
      );
    }

    return (
      <Container style={style}>
        {notes}
        {highlights}
      </Container>
    );
  }
}

BookContent.propTypes = {
  book: PropTypes.object.isRequired,
  style: PropTypes.object,
};

export default BookContent;
