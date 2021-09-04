import React, { FC } from 'react'

interface RadioInputProps {
  radioName: string
  labelText: string
  checkedValue: string | boolean
  valueElem: string | boolean
  setValue: (val:string | boolean) => void
}


const RadioInput: FC<RadioInputProps> = ({
  radioName,
  labelText,
  checkedValue,
  valueElem,
  setValue
}) => {
  return (
    <label>
      <input
        type="radio"
        name={radioName}
        checked={checkedValue === valueElem}
        className="radio-input"
        onChange={() => {setValue(checkedValue)}}
      /><span className="radio-duplication"></span>{labelText}
    </label>
  )
}

export default RadioInput;