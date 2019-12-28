import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

import SEO from '../components/common/SEO';

import { Container, Row, Col } from 'react-grid-system';

import { rhythm } from '../utils/typography';

import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';

import { READING_LIST_PATH } from '../utils/paths';

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
              In my free time, I read a ton of{' '}
                <a href={READING_LIST_PATH}> books</a> ranging from contemporary
                fiction, narrative non-fiction, and the occassional young adult
                novel. My favorite authors include Jack Kerouac, Cixin Liu,
                Andre Aciman, Herman Hesse, and Ted Chiang. I'm aiming to have
                all of my book notes and highlights to be digitized and
                published here.
              </p>
            </Col>
          </Row>
          <hr />
          <Row style={{ paddingTop: rhythm(2) }}>
          {data.allBooks.edges.map(({ node }) => {
            return (
                <Col lg={3}>
                  <Image fluid={data.sampleBook.childImageSharp.fluid} />
                  <br/>
                  <div style={{textAlign: 'center'}}>
                    <em>{node.lastFinishedAt}</em><br/>
                    <Link to={`/books/${node.id}`}>
                      <strong>{node.title}</strong>
                    </Link>
                    <p>{node.author}</p>
                  </div>
                </Col>
            );
          })}
          </Row>
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
          id
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