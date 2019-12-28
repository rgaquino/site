import React, { Fragment } from "react";
import { graphql } from "gatsby";

class Book extends React.Component {
  render() {
    const book = this.props.data.books;
    if (book.highlights == null) {
      book.highlights = [];
    }

    return (
      <Fragment>
        <h2>{book.title}</h2>
        {book.highlights.map((highlight) => {
          return (
            <Fragment>
              <p>{highlight}</p>
            </Fragment>
          );
        })}
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
      title
      highlights
    }
  }
`;
