import React from 'react'

function FormInput({name, lable, type, value, onChange}) {
  return (
    <div className="form-input">
        <lable htmlFor={name}>{lable}</lable>
        <input type={type} value={value} onChange={onChange} name={name}></input>
    </div>
  )
}

export default FormInput