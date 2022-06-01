import { globalCss } from './'

export const GlobalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 'none',
    boxSizing: 'border-box'
  },
  html: {
    margin: 0,
    padding: 0
  },
  'body, button': {
    backgroundColor: '$background',
    fontFamily: '$default'
  },
  'h1, h2, h3, h4, h5': {
    color: '$title'
  }
})
