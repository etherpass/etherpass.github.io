export const colors = {
  primary: '#0984e3',
  dark: '#2d3436',
  gray: '#b2bec3',
  lightgray: '#f7f7f7'
};

export const fonts = {
  heading: 'Open Sans, -apple-system, BlinkMacSystemFont, Helvetica, sans-serif'
};

export default {
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  colors: {
    ...colors,
    black: colors.dark
  },
  buttons: {
    primary: {
      color: colors.light,
      backgroundColor: colors.primary
    },
    outline: {
      color: colors.primary,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 2px'
    }
  },
  fonts,
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    medium: '0 3px 38px 0 rgba(0,0,0,.06), 0 3px 7px 0 rgba(0,0,0,.06)',
    large: '0 8px 24px rgba(0, 0, 0, .125)',
    xl: '0 18px 48px rgba(0,0,0,0.075)'
  },
  Heading: {
    lineHeight: 1.2,
    fontFamily: fonts.heading
  }
};
