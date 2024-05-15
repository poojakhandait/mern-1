import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Reg=()=> {
    let navigate=useNavigate()
    let[err,setErr]=useState('')
    let[data,setData]=useState({"_id":"","name":"","pwd":"","phno":"","gen":""})
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }
    let add=()=>{
        axios.post("http://localhost:5000/add",data).then((res)=>{
            if(res.data.err==undefined)
                {
                    navigate("/")
                }
                else{
                    setErr(res.data.err)
                }
        })

    }
  return (
    <div className='con'>
        <div className='form'>
            {err!=""&&<div className='err'>{err}</div>}
            <input type='text' placeholder='enter email' name="_id" value={data._id} onChange={fun}/>
            <input type='password' placeholder='enter password' name="pwd" value={data.pwd} onChange={fun}/>
            <input type='text' placeholder='enter name' name="name" value={data.name} onChange={fun}/>
            <input type='text' placeholder='enter phno' name="phno" value={data.phno} onChange={fun}/>
            <div className='rbtn'><input type='radio' name="gen" value="male" checked={data.gen=="male"} onChange={fun}/>Male
            <input type='radio' name="gen"  value="female" checked={data.gen=="female"} onChange={fun}/>Female
            </div>
            <button onClick={add}>Register</button>


        </div>
    </div>
  )
}

export default Reg