import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const About=()=>{
  let[data,setData]=useState()
  let obj=useContext(Ct)
  let navigate=useNavigate()
  useEffect(()=>{
    if(obj.data.token=="")
      {
        navigate("/")
      }
    else{
      axios.get("http://localhost:5000/about",{"headers":{"Authorization":obj.data.token}}).then((res)=>{
        setData(res.data.msg)

      })

    }
  },[])
  return (
    <div>{data}</div>
  )
}

export default About