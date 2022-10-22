import "./login.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Login() {
  const userRef=useRef()
  const passwordRef=useRef()
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <div className="login">
        <span className="loginTitle">
            Login
        </span>
        <form  className="loginForm">
            <label >username</label>
            <input type="text" ref={userRef} className="loginInput"  placeholder="Enter your username...." />
            <label >Password</label>
            <input ref={passwordRef} type="password" className="loginInput"  placeholder="Enter your Password...." />
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton"><Link to="/register" type="submit" onSubmit={handleSubmit} className="link" >Register</Link>  </button>

    </div>
  );
}
