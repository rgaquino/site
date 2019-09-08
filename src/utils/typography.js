import Typography from 'typography';
import GrandView from 'typography-theme-grand-view';

GrandView.overrideThemeStyles = ({ rhythm }) => {
  return {
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
