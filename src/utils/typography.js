import Typography from 'typography'
import GrandView from 'typography-theme-grand-view'

GrandView.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  }
}

// delete Wordpress2016.googleFonts

const typography = new Typography(GrandView)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
