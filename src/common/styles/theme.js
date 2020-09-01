import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#673ab7',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ff5722',
      contrastText: '#fff'
    },
    text: {
      primary: '#333333',
      light: '#8c8c8c',
      lighter: '#9f9f9f',
      dark: '#222222',
      darker: '#111111'
    }
  }
})

export default theme
