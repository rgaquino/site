import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';


class FullScreenImageLayout extends Component {
  render() {
    const backgroundColor = (this.props.backgroundColor) ? this.props.backgroundColor : '#fff';
    return (
      <BackgroundImage
          fluid={this.props.image}
          backgroundColor={backgroundColor}
          style={{ 
            height: '100vh', 
            textAlign: 'center', 
          }}
        >
          <div style={{ 
            background: this.props.overlay, 
            width: "100%", 
            height: "100%",             
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}>
            {this.props.children}
          </div>
      </BackgroundImage>
    );
  }
}

FullScreenImageLayout.propTypes = {
  image: PropTypes.object.isRequired,
  backgroundColor: PropTypes.string,
  overlay: PropTypes.string,
}

export default FullScreenImageLayout;
