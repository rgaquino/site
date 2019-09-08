import React, { Component } from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { Container, Row, Col } from 'react-grid-system';
import PropTypes from 'prop-types';

import LabelTag from '../../common/LabelTag/index';
import CenterButton from '../../common/CenterButton/index';
import { rhythm } from '../../../utils/typography';
import {
  PHOTOS_PATH,
  LETTERBOXD_PATH,
  INSTAGRAM_PATH,
} from '../../../utils/paths';

class PhotosLanding extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={12}>
            <div style={{ textAlign: 'center' }}>
              <Link to={PHOTOS_PATH}>
                <span style={{ fontSize: '40px' }}>
                  <strong>PHOTOS</strong>
                </span>
              </Link>
              <p>
                I also used to want to be a <a href={LETTERBOXD_PATH}>film</a>{' '}
                critic but later realized that I'd rather be immersed in them.
                Films from Mike Leigh, Asghar Farhadi, Mike Mills, Edward Yang,
                Marco Berger, and Sean Baker have influenced my life deeply. So
                instead, I try to practice{' '}
                <a href={INSTAGRAM_PATH}> photography</a> when I'm travelling.
                I'm hoping that through the act of turning the camera away from
                myself, like those films, I learn how to exalt the human
                condition.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} offset={{ lg: 3 }}>
            <div style={{ textAlign: 'center', paddingBottom: rhythm(1) }}>
              <Image fluid={this.props.image}></Image>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={10} offset={{ lg: 1 }}>
            <div style={{ textAlign: 'center', paddingTop: rhythm(1 / 2) }}>
              <LabelTag value="Latest Photo"></LabelTag>
              <div style={{ fontSize: '25px' }}>
                <em>"{this.props.caption}"</em>
              </div>
              <div style={{ paddingTop: rhythm(1 / 2) }}>
                <strong>
                  {this.props.location.toUpperCase()} ({this.props.date})
                </strong>
                <p>
                  <em>{this.props.gear}</em>
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <CenterButton text="view more photos" to={PHOTOS_PATH} />
          </Col>
        </Row>
      </Container>
    );
  }
}

PhotosLanding.propTypes = {
  image: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  gear: PropTypes.string.isRequired,
};

export default PhotosLanding;
