import "./topbar.css";

export default function topbar() {
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
            <li className="toplistItem">HOME</li>
            <li className="toplistItem">ABOUT</li>
            <li className="toplistItem">CONTACT</li>
            <li className="toplistItem">WRITE</li>
            <li className="toplistItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topright">
        <img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg" className="topimg" alt="" />
        <i className="topsearchicon  fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
