import React, { Component } from 'react';

import { rhythm } from '../../utils/typography';

class Footer extends Component {
  render() {
    return (
      <div  style={{
        textAlign: 'center',
        marginTop: rhythm(3 / 2),
        marginBottom: rhythm(1),
      }}>
        <footer>
          <div>
            © {new Date().getFullYear()} Ralph Gregor Aquino
          </div>
          <div>
            <p>
              <a href="https://github.com/rgaquino">GITHUB</a> //{' '}
              <a href="https://linkedin.com/in/rgaquino">LINKEDIN</a> //{' '}
              <a href="https://instagram.com/rgaquino">INSTAGRAM</a> //{' '}
              <a href="https://letterboxd.com/rgaquino">LETTERBOXD</a>
            </p>
          </div>
        </footer>
      </div>

    );
  }
}

export default Footer;
