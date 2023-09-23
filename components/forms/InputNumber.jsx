import { useState } from 'react'

const InputNumber = ({ min, max, defaultValue }) => {
  const [value, setValue] = useState(defaultValue)
  return (
    <>
      <button
        onClick={() => {
          value > min && setValue(value - 1)
        }}
      >
        -
      </button>
      <input
        type="text"
        value={value}
        min={min}
        max={max}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <button
        onClick={() => {
          value < max && setValue(value + 1)
        }}
      >
        +
      </button>
    </>
  )
}

export default InputNumber
