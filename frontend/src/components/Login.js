import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'
import axios from 'axios'

const Login=()=> {
  let [data,setData]=useState({"_id":"","pwd":"",})
  let[err,setErr]=useState()
  let navigate=useNavigate()
  let obj=useContext(Ct)
  console.log(obj)
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }
  let login=()=>{ console.log(data)
    axios.post("http://localhost:5000/login",data).then((res)=>{
      if(res.data.token!=undefined)
        {console.log(res)
          obj.fun(res.data)
          navigate("/home")
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
       <input type='text' placeholder='enter email' name='_id'value={data._id} onChange= {fun}/>
       <input type='password' placeholder='enter password' name='pwd' value={data.pwd} onChange={fun}/>
       <button onClick={login}>Login</button>
      </div>

    </div>
  )
}

export default Login