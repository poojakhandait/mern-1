import React, { useState } from 'react'
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/Login'
import Reg from './components/Reg'
import About from './components/About'
import Addcom from './components/Addcom'
import Logout from './components/Logout'
import Nav from './components/Nav'
import Home from './components/Home'
import './App.css'
import Ct from './components/Ct'

const App=()=> {
  let [data,setData]=useState({"token":"","_id":"","name":""})
  let fun=(obj)=>{
    setData({...obj})
  }
  let obj={'data':data,"fun":fun}
  return (
    <BrowserRouter>
    <Ct.Provider value={obj}>
    <Nav/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/reg' element={<Reg/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/addcom' element={<Addcom/>}/>
      <Route path='/logout' element={<Logout/>}/>
      
    </Routes>
    </Ct.Provider>
    </BrowserRouter>
   
  )
}

export default App