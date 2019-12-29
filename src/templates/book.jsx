import React, { Fragment } from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";

import LabelTag from "../components/common/LabelTag";
import SEO from "../components/common/SEO";
import Footer from "../components/common/Footer";
import { Container, Row, Col } from "react-grid-system";
import { rhythm } from "../utils/typography";

class Book extends React.Component {
  render() {
    const book = this.props.data.books;

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
    const title = `${book.title} by ${book.author}`;
    const imageLink = `${process.env.BOOK_IMAGE_BASE_URL}/${book.slug}.jpg`;
    return (
      <Fragment>
        <SEO title={title} />
        <Container>
          <Row style={{ paddingTop: rhythm(2) }}>
            <Col lg={4} offset={{ lg: 4 }} style={{ textAlign: "center" }}>
              <LabelTag value={book.lastFinishedAt} />
              <Link to={`/books`}>
                <img src={imageLink} />
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
          {highlights}
        </Container>
        <br />
        <Footer />
      </Fragment>
    );
  }
}

export default Book;

export const pageQuery = graphql`
  query BookBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    books(slug: { eq: $slug }) {
      slug
      title
      subtitle
      author
      category
      highlights
      lastFinishedAt(formatString: "DD MMMM YYYY")
    }
  }
`;
