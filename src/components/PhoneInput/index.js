import React from 'react'
import ReactInputMask from 'react-input-mask'

const beforeMaskedStateChange = ({ nextState }) => {
  let { value } = nextState

  if (value === '(__) ____-____') {
    value = ''
  }

  return {
    ...nextState,
    value
  }
}

const PhoneInput = (props) => {
  const { inputRef, onChange, ...other } = props

  return (
    <ReactInputMask
      {...other}
      onChange={onChange}
      value={props.value}
      beforeMaskedStateChange={beforeMaskedStateChange}
      mask="(99) 9999-9999"
    />
  )
}

export default PhoneInput
