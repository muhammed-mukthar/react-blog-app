import { useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "./Singlepost.css";
import { useState } from "react";

export default function SinglePost() {
  const location =useLocation()
 const path=location.pathname.split('/')[2];
 useEffect(()=>{
  const getPost=async()=>{
    const res=await axios.get('/posts/'+path)
    setPost(res.data)
  }
  getPost()
 },[path])
 const [post,setPost]=useState({})
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && <img
          src= {post.photo}
          alt=""
          className="singlePostImg"
        />}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostedit">
            <i className="SinglePostIcon  fa-regular fa-pen-to-square"></i>
            <i className="SinglePostIcon  fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostinfo">
          <span className="SinglePostAuthor">
            Autor: <Link to={`/?user=${post.username}`} className="link"><b>{post.username}</b></Link> 
          </span>
          <span className="SinglePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}
