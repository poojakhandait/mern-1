import React, { useContext, useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'
import axios from 'axios'


const Addcom=()=> {
  let[data,setData]=useState()
  let obj=useContext(Ct)
  let navigate=useNavigate()
  useEffect(()=>{
    if(obj.data.token=="")
      {
        navigate("/")
      }
      else{
        axios.post("http://localhost:5000/addcom",{},{"headers":{"Authorization":obj.data.token}}).then((res)=>{
          setData(res.data.msg)
        })
      }

  },[])
  return (
    <div>{data}</div>
  )
}

export default Addcom