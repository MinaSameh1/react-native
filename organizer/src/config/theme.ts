import { extendTheme } from 'native-base'

export const theme = extendTheme({
  colors: {
    primaryDark: {
      '50': '#266ED7',
      '200': '#3640b0',
      '300': '#333a8c',
      '400': '#2d326a',
      '550': '#242547',
      '500': '#24274b',
      '600': '#171933', // Main color
      '700': '#11121f',
      '800': '#090a0f',
      '900': '#000000'
    },
    primaryLight: {
      '50': '#266ED7',
      '600': '#fff'
    }
  },
  config: {
    initialColorMode: 'dark'
  }
})

export default theme
