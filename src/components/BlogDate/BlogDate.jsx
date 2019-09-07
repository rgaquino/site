import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rhythm } from '../../utils/typography';

class BlogDate extends Component {
  render() {
    return (
      <div style= {{
            paddingBottom: rhythm(1),
            color: "#fff"
        }}>
        <span style={{ 
            backgroundColor: "#242424", 
            padding: "10px", 
          }}>
          {this.props.date}
        </span>
        </div>
    );
  }
}

BlogDate.propTypes = {
  date: PropTypes.string.isRequired,
}

export default BlogDate;