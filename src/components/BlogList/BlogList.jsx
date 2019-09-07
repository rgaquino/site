import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import BlogListItem from './BlogListItem';

class BlogList extends Component {
  render() {
    return (
      <Fragment>
        {this.props.posts.map(({ node }) => {
          return (
            <BlogListItem key={node.frontmatter.id} post={node}/>
          );
        })}
      </Fragment>
    );
  }
}

BlogListItem.propTypes = {
  posts: PropTypes.object.isRequired,
}

export default BlogList;
