import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';

import SEO from '../components/SEO';
import FullScreenLayout from '../components/FullScreenLayout';

import Footer from '../components/Footer';
import Intro from '../components/Intro';

import { rhythm } from '../utils/typography';
import BlogLanding from '../components/BlogLanding';
import BooksLanding from '../components/BooksLanding';
import PhotosLanding from '../components/PhotosLanding';
import ExtraLanding from '../components/ExtraLanding';

class Index extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div style={{ scrollBehavior: 'smooth' }}>
        <SEO />
        <FullScreenLayout
          style={{
            textAlign: 'center',
            backgroundColor: '#242424',
            color: '#fff',
          }}
        >
          <Intro />
        </FullScreenLayout>
        <Container id="content">
          <Row style={{ paddingTop: rhythm(2) }}>
            <Col lg={12}>
              <BlogLanding posts={data.allMarkdownRemark.edges}/>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <hr />
            </Col>
          </Row>
          <Row style={{ paddingBottom: rhythm(2), paddingTop: rhythm(2) }}>
            <Col lg={12}>
              <BooksLanding 
                image={data.sampleBook.childImageSharp.fluid}
                title={"Commonwealth"}
                author={"Ann Patchett"}
                highlight={"There's no protecting anyone. Keeping people safe is a story we tell ourselves."}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <hr />
            </Col>
          </Row>
          <Row style={{ paddingBottom: rhythm(2), paddingTop: rhythm(2) }}>
            <Col lg={12}>
                <PhotosLanding 
                  image={data.samplePhoto.childImageSharp.fluid}
                  caption={"fish as deep down as possible — understand"}
                  date={"August 2019"}
                  location={"Sydney, Australia"}
                  gear={"Sony a6000 / Sigma 3.5mm f1.4 DC DN"}
                />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <hr />
            </Col>
          </Row>
          <Row style={{ paddingTop: rhythm(2) }}>
            <Col lg={10} offset={{ lg: 1 }}>
                <ExtraLanding />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    samplePhoto: file(relativePath: { eq: "sydney.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            id
            date(formatString: "DD MMMM YYYY")
            title
            description
            hero {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
