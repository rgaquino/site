import React, { Fragment } from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import { Link } from "gatsby";

import LabelTag from "../components/common/LabelTag";
import SEO from "../components/common/SEO";
import Footer from "../components/common/Footer";
import { Container, Row, Col } from "react-grid-system";
import { rhythm } from "../utils/typography";

class Book extends React.Component {
  render() {
    const book = this.props.data.books;
    if (book.highlights == null) {
      book.highlights = [];
    }
    const title = `${book.title} by ${book.author}`;
    return (
      <Fragment>
        <SEO title={title} />
        <Container>
          <Row style={{ paddingTop: rhythm(2) }}>
            <Col lg={4} offset={{ lg: 4 }} style={{ textAlign: "center" }}>
              <LabelTag value={book.lastFinishedAt} />
              <img src={book.imageLink} />
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
                <span>by {book.author}</span>
              </div>
              <div>
                <span>Category: {book.category}</span>
              </div>
              <div>
                <span>ISBN: {book.isbn}</span>
              </div>
              <div>
                <span>Publisher: {book.publisher}</span>
              </div>
              <div>
                <span>Page Count: {book.pageCount} pages</span>
              </div>
            </Col>
          </Row>
          <hr />
          <Row style={{ textAlign: "justify" }}>
            <Col lg={10} offset={{ lg: 1 }}>
              <h2>Highlights</h2>
              {book.highlights.map(highlight => {
                return (
                  <Fragment>
                    <p>
                      <article>
                        <section
                          dangerouslySetInnerHTML={{ __html: highlight }}
                        />
                      </article>
                    </p>
                  </Fragment>
                );
              })}
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default Book;

export const pageQuery = graphql`
  query BookByID($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    books(id: { eq: $id }) {
      id
      isbn
      title
      subtitle
      author
      category
      highlights
      publisher
      pageCount
      imageLink
      lastFinishedAt(formatString: "DD MMMM YYYY")
    }
  }
`;
