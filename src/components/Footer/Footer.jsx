import React, { Component } from 'react';

import { rhythm } from '../../utils/typography';

class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          textAlign: 'center',
          marginTop: rhythm(3 / 2),
          marginBottom: rhythm(1),
        }}
      >
        © {new Date().getFullYear()} Ralph Gregor Aquino
      </footer>
    );
  }
}

export default Footer;
