import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { rhythm } from '../../utils/typography';

class CenterButton extends Component {
  render() {
    return (
      <div
        style={{ 
        textAlign: 'center', 
        paddingTop: rhythm(1),
        ...this.props.style,
      }}
      >
        <Link to={this.props.to}>
          <strong>[ {this.props.text} ]</strong>
        </Link>
      </div>
    );
  }
}

CenterButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
}

export default CenterButton;
