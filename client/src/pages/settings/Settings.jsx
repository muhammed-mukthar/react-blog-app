import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"
              alt=""
            />
                   <label htmlFor="fileInput">
            <i class="settingsPPIcon   fa-regular fa-user"></i>
          </label>
          </div>
   
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <label>Username</label>
          <input type="text" placeholder="mukthar" />
          <label>Email</label>
          <input type="email" placeholder="sample@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
