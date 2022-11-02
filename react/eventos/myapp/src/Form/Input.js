import React from 'react'

const Input = ({ label, id, ...props}) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  )
}

export default Input