import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct'
const Nav=()=> {
    let obj=useContext(Ct)
  return (
    <nav>
    {obj.data.token=="" &&<Link to='/'>Login</Link>}
    {obj.data.token=="" &&<Link to='/reg'>Register</Link>}
    {obj.data.token!="" &&<Link to='/home'>Home</Link>}
    {obj.data.token!="" &&<Link to='/about'>About</Link>}
    {obj.data.token!="" &&<Link to='/addcom'>Addcom</Link>}
    {obj.data.token!="" && <Link to='/logout'>Logout</Link>} 
    {obj.data.token!="" &&<div>{obj.data.name}</div>}
    </nav>
  )
}

export default Nav