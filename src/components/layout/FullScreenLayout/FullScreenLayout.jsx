import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
