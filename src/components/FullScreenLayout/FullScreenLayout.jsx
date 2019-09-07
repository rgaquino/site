import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

class FullScreenLayout extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          ...this.props.style,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

FullScreenLayout.propTypes = {
  style: PropTypes.object,
};

export default FullScreenLayout;
