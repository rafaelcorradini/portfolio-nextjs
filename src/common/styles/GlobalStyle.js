import { createGlobalStyle } from 'styled-components'
import { spacing } from './mixing'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
  }
  ${spacing('margin', 'm')}
  ${spacing('padding', 'p')}
`
export default GlobalStyle
