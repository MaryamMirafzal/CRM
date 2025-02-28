
function FormElement({name, lable, type, value, onChange}) {
  return (
    <div className="form-input">
        <lable htmlFor={name}>{lable}</lable>
        <input 
           id={name} 
           name={name} 
           type={type} 
           value={value} 
           onChange={onChange} 
        />
    </div>
  )
}

export default FormElement