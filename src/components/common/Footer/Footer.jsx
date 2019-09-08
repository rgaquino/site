import React, { Component } from 'react';

import { rhythm } from '../../../utils/typography';
import {
  GITHUB_PATH,
  LINKEDIN_PATH,
  INSTAGRAM_PATH,
} from '../../../utils/paths';

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: 'center',
          paddingTop: rhythm(3 / 2),
        }}
      >
        <footer>
          <div>© {new Date().getFullYear()} Ralph Gregor Aquino</div>
          <div>
            <p>
              <a href={GITHUB_PATH}>GITHUB</a> //{' '}
              <a href={LINKEDIN_PATH}>LINKEDIN</a> //{' '}
              <a href={INSTAGRAM_PATH}>INSTAGRAM</a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
