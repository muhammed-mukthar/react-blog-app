import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function Topbar() {
  const {user,dispatch}=useContext(Context)
  const handleLogout=()=>{
    dispatch({type:"LOGOUT"})

  }
  
  return (
    <div className="top">
      <div className="topleft">
        <i className="topIcon  fa-brands fa-square-facebook"></i>
        <i className="topIcon  fa-brands fa-square-twitter"></i>
        <i className="topIcon  fa-brands fa-square-pinterest"></i>
        <i className="topIcon  fa-brands fa-square-instagram"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
            <li className="toplistItem">
              <Link to="/" className="link">HOME</Link>
            </li>
            <li className="toplistItem"><Link to="/" className="link">ABOUT</Link></li>
            <li className="toplistItem"><Link to="/" className="link">CONTACT</Link></li>
            <li className="toplistItem"><Link to="/write" className="link">WRITE</Link></li>
            <li className="toplistItem" onClick={handleLogout}><Link to="/login" className="link">{user && "LOGOUT"}</Link></li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
           <img src={user.profilePic} className="topimg" alt="" />
        ):(         
          <ul className="toplist">
            <li className="toplistItem">
            <Link to="/login" className="link">LOGIN</Link>
            </li>
            <li className="toplistItem">
            <Link to="/register" className="link">REGISTER</Link>
            </li>
                 
                  
          </ul>
        )}
       
        <i className="topsearchicon  fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
