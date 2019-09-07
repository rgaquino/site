import React from 'react';
import { graphql, Link } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';
import Image from 'gatsby-image';

import SEO from '../components/SEO';
import FullScreenLayout from '../components/FullScreenLayout';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';
import LabelTag from '../components/LabelTag';
import Arrow from '../components/Arrow';

import { rhythm } from '../utils/typography';

class Index extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div style={{ scrollBehavior: 'smooth' }}>
        <SEO />
        <FullScreenLayout
          style={{
            textAlign: 'center',
            backgroundColor: '#1F3551',
            color: '#fff',
          }}
        >
          <Container>
            <Row>
              <Col lg={12}>
                <div style={{ fontSize: '125px'}}>
                  <strong>Hi, I'm RG.</strong>
                </div>
                <p style={{ fontSize: '20px' }}>
                  I'm a Software Engineer based in Singapore currently writing
                    backend code for{' '}
                    <a href="https://github.com/eatigo">@eatigo</a>. Nowadays I
                    write mostly in <strong>Go</strong> and <strong>JavaScript</strong>. Previously, I worked on
                    financial web applications built using <strong>Java</strong>.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Arrow />
              </Col>
            </Row>
          </Container>
        </FullScreenLayout>
        <Container id="content">
          <Row style={{ paddingTop: rhythm(2) }}>
            <Col lg={12}>
              <Container>
                <Row>
                  <Col lg={12}>
                    <div style={{ textAlign: 'center' }}>
                      <Link to="/blog">
                        <span style={{ fontSize: '40px' }}>
                          <strong>BLOG</strong>
                        </span>
                      </Link>
                      <p>
                        I'm using this website as a command center for my
                        digital life and as a way to learn new tech as they
                        come. I'm calling it{' '}
                        <Link to="/blog/introducing-rocinante">
                          <strong>The Rocinante Project</strong>
                        </Link>
                        , with the end goal of having expertise on multiple web
                        development stacks and not get overwhelmed by how much
                        there is to learn. I'm <Link to="/blog">blogging</Link>{' '}
                        about the steps of building this website from design to
                        implementation to both track my progress and as a way
                        for others to learn from them. I believe in the value of
                        not erasing our own learning arc by never feigning
                        perfection.
                      </p>
                    </div>
                    <div>
                      <BlogList posts={data.allMarkdownRemark.edges} />
                    </div>
                    <div
                      style={{ textAlign: 'center', paddingBottom: rhythm(2) }}
                    >
                      <Link to="/blog">
                        <strong>[ view more posts ]</strong>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <hr />
            </Col>
          </Row>
          <Row style={{ paddingBottom: rhythm(2), paddingTop: rhythm(2) }}>
            <Col lg={12}>
              <Container>
                <Row>
                  <Col lg={8}>
                    <div style={{ textAlign: 'left'}}>
                      <Link to="/books">
                        <span style={{ fontSize: '40px' }}>
                          <strong>BOOKS</strong>
                        </span>
                      </Link>
                      <p>
                        On my free time, I read a ton of{' '}
                        <a href="https://trello.com/b/0SUpWrLd"> books</a>{' '}
                        ranging from contemporary fiction, narrative
                        non-fiction, and the occassional young adult novel. My
                        favorite authors include Jack Kerouac, Cixin Liu, Andre
                        Aciman, Herman Hesse, and Ted Chiang. I'm aiming to have
                        all of my book notes and highlights to be digitized and
                        published here.
                      </p>
                    </div>
                    <div style={{ textAlign: 'center', paddingTop: rhythm(1) }}>  
                      <LabelTag value="Latest Highlight"></LabelTag>
                      <div
                        style={{
                          fontSize: '25px',
                          paddingBottom: rhythm(1),
                        }}
                      >
                        <em>
                          "There's no protecting anyone. Keeping people safe is
                          a story we tell ourselves."
                        </em>
                      </div>
                      <div>
                        <strong>COMMONWEALTH</strong>
                        <p>
                          <em>by Ann Pachett</em>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div style={{ 
                        textAlign: 'center',           
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column', 
                        height: '100%'}}>
                      <Image
                        fluid={data.sampleBook.childImageSharp.fluid}
                      ></Image>
                    </div>
                  </Col>
                </Row>
                <Row style={{ paddingTop: rhythm(1) }}>
                  <Col lg={12}>
                    <div style={{ textAlign: 'center' }}>
                      <Link to="/books">
                        <strong>[ view more books ]</strong>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <hr />
            </Col>
          </Row>
          <Row style={{ paddingBottom: rhythm(2), paddingTop: rhythm(2) }}>
            <Col lg={12}>
              <Container>
                <Row>
                  <Col lg={12}>
                    <div style={{ textAlign: 'center' }}>
                      <Link to="/photos">
                        <span style={{ fontSize: '40px' }}>
                          <strong>PHOTOS</strong>
                        </span>
                      </Link>
                      <p>
                        I also used to want to be a{' '}
                        <a href="https://letterboxd.com/rgaquino">film</a>{' '}
                        critic but later realized that I'd rather be immersed in
                        them. Films from Mike Leigh, Asghar Farhadi, Mike Mills,
                        Edward Yang, Marco Berger, and Sean Baker have
                        influenced my life deeply. So instead, I try to practice{' '}
                        <a href="https://instagram.com/rgaquino">
                          {' '}
                          photography
                        </a>{' '}
                        when I'm travelling. I'm hoping that through the act of
                        turning the camera away from myself, like those films, I
                        learn how to exalt the human condition.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} offset={{ lg: 3 }}>
                    <div
                      style={{ textAlign: 'center', paddingBottom: rhythm(1) }}
                    >
                      <Image
                        fluid={data.samplePhoto.childImageSharp.fluid}
                      ></Image>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={10} offset={{ lg: 1 }}>
                    <div
                      style={{ textAlign: 'center', paddingTop: rhythm(1 / 2) }}
                    >
                      <LabelTag value="Latest Photo"></LabelTag>
                      <div style={{ fontSize: '25px' }}>
                        <em>"fish as deep down as possible — understand"</em>
                      </div>
                      <div style={{ paddingTop: rhythm(1 / 2) }}>
                        <strong>SYDNEY, AUSTRALIA (August 2019)</strong>
                        <p>
                          <em>Sony a6000 / Sigma 3.5mm f1.4 DC DN</em>
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row style={{ paddingTop: rhythm(1 / 2) }}>
                  <Col lg={12}>
                    <div style={{ textAlign: 'center' }}>
                      <Link to="/photos">
                        <strong>[ view more photos ]</strong>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <hr />
            </Col>
          </Row>
          <Row style={{ paddingTop: rhythm(2) }}>
            <Col lg={10} offset={{ lg: 1 }}>
              <div style={{ textAlign: 'center' }}>
                <p>
                  I'm aiming to have all of my socials to be aggregated and
                  displayed on this website. It is currently on active
                  development and you can find the source code{' '}
                  <a href="https://github.com/rgaquino/site">here</a>. For the
                  meantime, if you're interested in working with me, send me a
                  message or follow me on any of the links below.
                </p>
              </div>
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
      limit: 1
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
`;
