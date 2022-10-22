import "./login.css"
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useContext } from "react";
import { Context } from "../../../context/Context";
import axios from "axios";
export default function Login() {
  const userRef=useRef()
  const passwordRef=useRef()
  const {user,dispatch,isFetching}=useContext(Context)
 
  const handleSubmit=async (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
  
  try {
    const res= await axios.post(`http://localhost:5000/api/auth/login`,{
      username:userRef.current.value,
      password:passwordRef.current.value
    })
    dispatch({type:"LOGIN_SUCCESS",payload:res.data})
  } catch (error) {
    dispatch({type:"LOGIN_FAILURE"})
  }
}
  console.log(user);
  return (
    <div className="login">
        <span className="loginTitle">
            Login
        </span>
        <form onSubmit={handleSubmit} className="loginForm">
            <label >username</label>
            <input type="text" ref={userRef} className="loginInput"  placeholder="Enter your username...." />
            <label >Password</label>
            <input ref={passwordRef} type="password" className="loginInput"  placeholder="Enter your Password...." />
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton" type="submit"  ><Link to="/register"  className="link" >Register</Link>  </button>
    </div>
  )
}
