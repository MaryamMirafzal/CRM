import React, { useState } from 'react'
import Form from '../module/Form'
import { useRouter } from 'next/router'

function AddCustomerPage() {
  const [ form , setForm ] = useState({
    name:"",
    lastName:"",
    email:"",
    phone:"",
    address:"",
    postalCode:"",
    date:"",
    products:[],
  })

  const router = useRouter()
  const cancleHandler = ()=>{
    setForm({
      name:"",
      lastName:"",
      email:"",
      phone:"",
      address:"",
      postalCode:"",
      date:"",
      products:[],
    })
    router.push("/")
  }

  const saveHandler = async ()=>{
    const res = await fetch("/api/customer",{
      method: "POST",
      body: JSON.stringify({date: form}),
      headers: {"Content-Type": "application/json"}
    })
    const data = res.json()
    console.log(data);
    if(data.status == "success") router.push("/")
  }
  return (
    <div className="customer-page">
      <h4>Add New Customer</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button className="first" onClick={cancleHandler}>Cancle</button>
        <button className="second" onClick={saveHandler}>Savesavetton</button>

      </div>
    </div>
  )
}

export default AddCustomerPage