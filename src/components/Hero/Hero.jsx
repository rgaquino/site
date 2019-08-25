import React, { Component } from 'react';
import { Link } from 'gatsby';

class Hero extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h1>Ralph Gregor Aquino</h1>
        </Link>
        <p>Software Engineer based in Singapore</p>
      </div>
    );
  }
}

export default Hero;
