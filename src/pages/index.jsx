import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/SEO';
import Intro from '../components/Intro';

class Index extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <SEO />
        <Intro />
      </Fragment>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;