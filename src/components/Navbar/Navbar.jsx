import React, { Component } from 'react';
import { Link } from 'gatsby';

import { rhythm } from '../../utils/typography';
import { HOME_PATH } from '../../utils/paths';

class Navbar extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', fontSize: "20px", paddingTop: rhythm(1)}}>
        <Link to={HOME_PATH}><strong>RGAQUINO</strong></Link>
      </div>
    );
  }
}

export default Navbar;
