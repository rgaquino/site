import Typography from 'typography';
import GrandView from 'typography-theme-grand-view';

GrandView.overrideThemeStyles = ({ rhythm }) => {
  return {
    "h1,h2,h3,h4,h5,h6": {
      marginTop: rhythm(0)
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  };
};

const typography = new Typography(GrandView);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
