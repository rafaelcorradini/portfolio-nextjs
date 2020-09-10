import React from 'react'
import { InputMask } from 'react-masked'

const PhoneInput = (props) => {
  const { onChange, ...other } = props

  return (
    <InputMask
      {...other}
      onChange={onChange}
      value={props.value}
      mask="(99) 99999-9999"
    />
  )
}

export default PhoneInput
