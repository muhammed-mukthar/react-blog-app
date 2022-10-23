import { useEffect ,useContext} from "react";
import Axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "./Singlepost.css";
import { useState } from "react";
import {Context} from '../../context/Context'
const PF='http://localhost:5000/images/'


export default function SinglePost() {
  const { user } = useContext(Context);
  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")
  const [updateMode,setUpdateMode]=useState(false)
  

  const location =useLocation()
 const path=location.pathname.split('/')[2];
 useEffect(()=>{
  const getPost=async()=>{
    const res= await Axios.get(`/posts/`+path)
    setPost(res.data)
    setTitle(res.data.title)
    setDesc(res.data.desc)
  }
  getPost()
 },[path])
 const [post,setPost]=useState({})

const hadleDelete=async()=>{
  try{
 await Axios.delete(`/posts/${post._id}`,{data:{username:user.username}})
 window.location.replace("/");

  }catch(err){ }
}
const handleUpdate=async()=>{
  try{
    await Axios.put(`/posts/${post._id}`
    ,{username:user.username,title,desc})
   setUpdateMode(false)
   
     }catch(err){ }
   
}

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (<img
          src= {PF+post.photo}
          alt=""
          className="singlePostImg"
        />)} {
          updateMode ?
           <input type="text" onChange={(e)=>{setTitle(e.target.value)}} className="siglePagetitleInput" autoFocus value={title}/> :(
        <h1 className="singlePostTitle">
          {title}

         {post.username ===user.username && <div className="singlePostedit">
            <i className="SinglePostIcon  fa-regular fa-pen-to-square" onClick={()=>{setUpdateMode(true)}}></i>
            <i className="SinglePostIcon  fa-solid fa-trash" onClick={hadleDelete}></i>
          </div>}
        </h1>)  }
        <div className="singlePostinfo">
          <span className="SinglePostAuthor">
            Autor: <Link to={`/?user=${post.username}`} className="link"><b>{post.username}</b></Link> 
          </span>
          <span className="SinglePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ?(
        <textarea className='singlePostDesc' value={desc} onChange={(e)=>{setDesc(e.target.value)}} autoFocus/>
        ):(

      
        <p className="singlePostDescInput">
          {desc}
        </p> 
         )}
      {updateMode &&  <button className="singlePostButton" onClick={handleUpdate}>Update</button>}
      </div>
    </div>
  );
}
