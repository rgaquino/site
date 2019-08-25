import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';

import '../../css/styles.css';

class Intro extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={10} offset={{ md: 1 }}>
            <Link to="/">
              <h1 className="highlight">Hi, I'm RG.</h1>
            </Link>
            <p>
              I'm a Software Engineer based in Singapore currently writing
              backend code for <a href="https://github.com/eatigo">@eatigo</a>.
              I now write mostly in Go and JavaScript and previously worked on
              financial web apps mainly using Java.
            </p>
            <p>
              I'm using this website as a command center for my digital life and
              as a way to learn new tech as they come. I'm calling it{' '}
              <strong>The Rocinante Project</strong>, with the end goal of
              having expertise on multiple web development stacks and not get
              overwhelmed by how much there is to learn.
            </p>
            <p>
              I'm <Link to="/blog">blogging</Link> about the steps of building
              this website from design to implementation to both track my
              progress and as a way for others to learn from them. I believe in
              the value of not erasing our own learning arc by not feigning
              perfection. I will also post random rants because why not.
            </p>
            <p>
              On my free time, I read a ton of{' '}
              <a href="https://trello.com/b/0SUpWrLd"> books</a> ranging from
              contemporary fiction, narrative non-fiction, and the occassional
              young adult novel. My favorite authors include Jack Kerouac, Cixin
              Liu, Andre Aciman, Herman Hesse, and Ted Chiang. I used to want to
              be a <a href="https://letterboxd.com/rgaquino">film</a> critic but
              have now learned to just sit down and enjoy them. My favorite
              directors are Mike Leigh, Asghar Farhadi, Mike Mills, Andrew
              Haigh, Marco Berger, and Sean Baker. Yes I am aware that's a lot
              of white people.
            </p>
            <p>
              On my travels, I try to practice{' '}
              <a href="https://instagram.com/rgaquino"> photography</a> hoping
              that through the act of turning the camera away from myself I
              learn to exalt the human condition. I also don't carry around a
              tripod, so.
            </p>
            <p>
              If you're interested in working with me, hit me up at
              ralphgregoraquino@gmail.com or follow me on any of the links
              below. But be warned, I will send memes.
            </p>
            <p>
              <a href="https://github.com/rgaquino">GITHUB</a> //{' '}
              <a href="https://linkedin.com/in/rgaquino">LINKEDIN</a> //{' '}
              <a href="https://instagram.com/rgaquino">INSTAGRAM</a>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Intro;
