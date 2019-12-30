import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DiscussionEmbed } from 'disqus-react';
import { Container, Row, Col } from 'react-grid-system';

import { BLOG_PATH } from '../../../utils/paths';

class BookContent extends Component {
  render() {
    const { book, style } = this.props;
    var highlights;
    if (book.highlights != null) {
      highlights = (
        <Row>
          <Col lg={10} offset={{ lg: 1 }}>
            <h2>Highlights</h2>
            {book.highlights.map((highlight, idx) => {
              var sep;
              if (idx != book.highlights.length - 1) {
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

    return (
        <Fragment>
          {highlights}
        </Fragment>
    );
  }
}

BookContent.propTypes = {
  book: PropTypes.object.isRequired,
  style: PropTypes.object,
};

export default BookContent;
