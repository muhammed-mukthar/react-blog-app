import { useContext, useState } from "react";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";
import { Context } from "../../../context/Context";
import "./settings.css";

export default function Setting() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [edit, setEdit] = useState(false);
  const { user,dispatch } = useContext(Context);
  const PF='http://localhost:5000/images/'
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:'UPDATE_START'})
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
     const res= await axios.put("/users/" + user._id, updatedUser);
      setEdit(true);
      dispatch({type:'UPDATE_SUCCESS',payload:res.data})
    } catch (err) {
      dispatch({type:'UPDATE_FAILURE'})
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete account</span>
        </div>
        <form onSubmit={handleSubmit} className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={file ? URL.createObjectURL(file) :PF+ user.profilePic} alt="" />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon   fa-regular fa-user"></i>
            </label>
          </div>

          <input
            type="file"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "none" }}
          />
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className="settingsSubmit">
            Update
          </button>
          {edit && (
            <span
              style={{ color: "green", textAlign: "center", margin: "20px" }}
            >
              Profile has been updated ...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
