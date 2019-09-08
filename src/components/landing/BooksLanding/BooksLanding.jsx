import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

import LabelTag from '../../common/LabelTag';
import CenterButton from '../../common/CenterButton';

import { rhythm } from '../../../utils/typography';
import { BOOKS_PATH, READING_LIST_PATH } from '../../../utils/paths';

class BooksLanding extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={8}>
            <div style={{ textAlign: 'left' }}>
              <Link to={BOOKS_PATH}>
                <span style={{ fontSize: '40px' }}>
                  <strong>BOOKS</strong>
                </span>
              </Link>
              <p>
                On my free time, I read a ton of{' '}
                <a href={READING_LIST_PATH}> books</a> ranging from contemporary
                fiction, narrative non-fiction, and the occassional young adult
                novel. My favorite authors include Jack Kerouac, Cixin Liu,
                Andre Aciman, Herman Hesse, and Ted Chiang. I'm aiming to have
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
                <em>"{this.props.highlight}"</em>
              </div>
              <div>
                <strong>{this.props.title}</strong>
                <p>
                  <em>{this.props.author}</em>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div
              style={{
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <Image fluid={this.props.image} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <CenterButton text="view more books" to={BOOKS_PATH} />
          </Col>
        </Row>
      </Container>
    );
  }
}

BooksLanding.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  highlight: PropTypes.string.isRequired,
};

export default BooksLanding;
