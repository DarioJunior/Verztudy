import { createStitches, ScaleValue } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      background: '#121214',
      text: '#ffffff',

      grey100: '#E1E1E6',
      grey200: '#C4C4CC',
      grey300: '#8D8D99',
      grey400: '#7C7C8A',
      grey500: '#505059',
      grey600: '#323238',
      grey700: '#29292E',
      grey800: '#202024',
      grey900: '#121214',
      grey950: '#09090A',

      lightWarning: '#CC2937',
      darkWarning: '#2D090C',

      lightViolet: '#996DFF',
      midViolet: '#8257E5',
      darkViolet: '#633BBC'
      
    },
    space: {
      '0': '0px',
      '1': '1px',
      '4': '0.25rem',
      '8': '0.5rem',
      '12': '0.75rem',
      '16': '1rem',
      '20': '1.25rem',
      '24': '1.5rem',
      '32': '2rem',
      '40': '2.5rem',
      '48': '3rem'
    },
    fonts: {
      default: '"Quattrocento Sans", sans-serif'
    },
    radii: {
      full: '9999px',
      default: '10px'
    },
  },
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
  utils: {
    px: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value
    })
  }
})
