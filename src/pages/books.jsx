import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

import SEO from '../components/common/SEO';

import { Container, Row, Col } from 'react-grid-system';

import { rhythm } from '../utils/typography';

import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import LabelTag from '../components/common/LabelTag';

import { READING_LIST_PATH } from '../utils/paths';
import BookList from '../components/book/BookList/BookList';

class BooksIndex extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div>
        <SEO title="Books" />
        <Container>
          <Row>
            <Col lg={12}>
              <Navbar />
            </Col>
          </Row>
          <Row>
            <Col lg={12} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '15vmin' }}>
                <strong>BOOKS</strong>
              </div>
              <p>
                Here's a list of all the books that I've read throughout the years. Inspired by <a href="https://highlights.sawyerh.com">Sawyer Hollenshead</a> and <a href="https://patrickcollison.com/bookshelf">Patrick Collison</a>'s lists,
                I'm aiming to transcribe all of my highlights and book notes and aggregate them on this page.
                You can also check out what's next on my reading list <a href={READING_LIST_PATH}> here</a>.
              </p>
            </Col>
          </Row>
          <hr />
          <BookList books={data.books}/>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default BooksIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allBooks(filter: {lastFinishedAt: {ne: null}}, sort: { fields: [lastFinishedAt], order: DESC }) {
      edges {
        node {
          slug
          title
          author
          highlights
          lastFinishedAt(formatString: "DD MMMM YYYY")
        }
      }
    }
    sampleBook: file(relativePath: { eq: "commonwealth.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;