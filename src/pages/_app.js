import NextApp from 'next/app'
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import 'typeface-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import GlobalStyle from 'common/styles/GlobalStyle'
import theme from 'common/styles/theme'
import 'common/i18n'

class App extends NextApp {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <Fragment>
              <CssBaseline />
              <GlobalStyle />
              <Component {...pageProps} />
            </Fragment>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    )
  }
}

export default App
