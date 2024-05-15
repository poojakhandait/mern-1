import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'


const Home=()=> {
  let obj=useContext(Ct)
  let[user,setUser]=useState({})
  let navigate=useNavigate()
  useEffect(()=>{
    if(obj.data.token=="")
      {
        navigate("/")
      }
      else{
        axios.get(`http://localhost:5000/getuser/${obj.data._id}`,{"headers":{"Authorization":obj.data.token}}).then((res)=>{
          setUser(res.data)
        })
      }

  },[])
  return (
    <div className='user'>
      <p>Nmae:{user.name}</p>
      <p>Email:{user._id}</p>
      <p>Phone:{user.phno}</p>
      <p>Gender:{user.gen}</p>
    </div>
  )
}

export default Home