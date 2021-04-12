import React, { Fragment } from "react";
import { graphql } from "gatsby";

import SEO from "../components/common/SEO";
import Footer from "../components/common/Footer";

import BookHeader from "../components/book/BookHeader/BookHeader";
import BookContent from "../components/book/BookContent/BookContent";

class Book extends React.Component {
  render() {
    const book = this.props.data.books;
    const title = `${book.title} by ${book.author}`;
    return (
      <Fragment>
        <SEO title={title} />
        <BookHeader book={book} />
        <BookContent book={book} />
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
      notes
      lastFinishedAt(formatString: "DD MMMM YYYY")
    }
  }
`;
