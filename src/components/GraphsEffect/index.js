import React from 'react'
import { StyledDiv, GraphImage } from './style'

const numberOfGraphs = 15
const range = 2

const GraphsEffect = () => {
  const renderGraphs = () => {
    const randomList = []

    for (let i = 0; i <= numberOfGraphs; i++) {
      const index = Math.round(Math.random() * range)
      randomList.push(
        <GraphImage
          src={`/graph${index}.svg`}
          style={{
            width: 300 + Math.random() * 100,
            padding: 20 + Math.random() * 100,
            opacity: 0.5 * Math.random()
          }}
        />
      )
    }

    return randomList
  }

  return <StyledDiv>{renderGraphs()}</StyledDiv>
}

export default GraphsEffect
