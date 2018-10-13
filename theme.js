// export const theme1 = {
//   primary: '#ff0198',
//   secondary: '#01c1d6',
//   danger: '#eb238e',
//   light: '#f4f4f4',
//   dark: '#222'
// };

// export const theme2 = {
//   primary: '#6e27c5',
//   secondary: '#ffb617',
//   danger: '#f16623',
//   light: '#f4f4f4',
//   dark: '#222'
// };

// const blue = '#07c';
// const blue = '#458DD3';
const blue = '#0984e3';
// const blue = '#2f80ed';
// const lightgray = '#f8f9f9';
const lightgray = '#dfe6e9';
// const gray = '#DBDBDB';
const gray = '#b2bec3';
// const black = '#0D0D0D';
const black = '#2d3436';
// const text = rgba(0, 0, 0, 0.8);
const text = black;

export const headingFont =
  'Lato, -apple-system, BlinkMacSystemFont, Helvetica, sans-serif';

export default {
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  colors: {
    blue,
    lightgray,
    gray,
    black,
    text
  },
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: blue
    },
    outline: {
      color: blue,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 2px'
    }
  },
  fonts: {
    heading: headingFont
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  Heading: {
    lineHeight: 1.2,
    fontFamily: headingFont
  }
};
