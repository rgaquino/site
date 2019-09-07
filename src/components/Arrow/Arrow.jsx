import React, { Component } from 'react';

import './arrow.css';

class Arrow extends Component {
  render() {
    return (
      <div  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div className="arrow"/>
      </div>
    );
  }
}

export default Arrow;
