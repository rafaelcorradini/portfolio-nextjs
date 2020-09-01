import styled from 'styled-components'

export const StyledDiv = styled.div`
  position: absolute;
  height: 100%;
  overflow: hidden;
`

export const GraphImage = styled.img`
  -webkit-animation: spin 120s linear infinite;
  -moz-animation: spin 120s linear infinite;
  animation: spin 120s linear infinite;
  animation-fill-mode: infinite;
  -webkit-animation-fill-mode: infinite;
  -moz-animation-fill-mode: infinite;

  @-moz-keyframes spin {
    0% {
      -moz-transform: rotate(0deg), scale(1);
    }
    50% {
      -moz-transform: rotate(180deg), scale(2);
    }
    100% {
      -moz-transform: rotate(0deg), scale(1);
    }
  }
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg), scale(1);
    }
    50% {
      -webkit-transform: rotate(180deg), scale(2);
    }
    100% {
      -webkit-transform: rotate(0deg), scale(1);
    }
  }
  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg), scale(1);
      transform-origin: center;
    }
    50% {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg), scale(2);
      transform-origin: 10% 20%;
    }
    100% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg), scale(1);
      transform-origin: center;
    }
  }
`
