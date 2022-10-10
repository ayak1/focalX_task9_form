import React, { useState } from 'react';
import './Form.css'
const Form = () => {
    const [form , setForm] = useState({
        firstName:'',
        lastName:'',
        education:'',
        email:'',
        phone:'',
        experiance:'',
        address:''
    })
    const inputHandler = (e) => {
        let formInputName = e.target.name;
        let formInputValue = e.target.value;
        setForm(form => ({...form, [formInputName]:formInputValue}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }
  return (
    <div>
        <form onSubmit={(e)=> handleSubmit(e)} style={{display:'flex',flexDirection:'column'}}>
           <div> 
            <label>First Name :</label>
            <input placeholder='First Name' name='firstName' value={form.firstName} onChange={(e)=>inputHandler(e)}/>
           </div>
           <div> 
            <label>Last Name :</label>
            <input placeholder='Last Name' name='lastName' value={form.lastName} onChange={(e)=>inputHandler(e)}/>
           </div>
           <div>
            <label>Education :</label>
            <input placeholder='Education' name='education' value={form.education} onChange={(e)=>inputHandler(e)}/>
           </div>
           <div>
            <label>Email :</label>
            <input placeholder='Email' name='email' value={form.email} onChange={(e)=>inputHandler(e)}/>
           </div>
           <div>
            <label>Phone :</label>
            <input placeholder='Phone' name='phone' value={form.phone} onChange={(e)=>inputHandler(e)}/>
           </div>
           <div>
            <label>Experiance :</label>
            <input placeholder='Experiance' name='experiance' value={form.experiance} onChange={(e)=>inputHandler(e)}/>
           </div>
           <div>
            <label>Address :</label>
            <input placeholder='Address' name='address' value={form.address} onChange={(e)=>inputHandler(e)}/>
           </div>
            <input className='btn' type='submit' value='submit'/>
        </form>
    </div>
  )
}

export default Form