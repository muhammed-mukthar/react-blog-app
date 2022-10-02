import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <div className="sidebarTitle">ABOUT ME</div>
            <img src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit iure nam debitis facilis facere, inventore qui.</p>

        </div>
        <div className="sidebarItem">
            <div className="sidebarTitle">CATEGORIES</div>
            <ul className="sidebar-List">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
        <div className="sidebarTitle">FOLLOW US</div>
        <div className="sidebarSocial">
        <i className="SideBarIcon  fa-brands fa-square-facebook"></i>
        <i className="SideBarIcon  fa-brands fa-square-twitter"></i>
        <i className="SideBarIcon  fa-brands fa-square-pinterest"></i>
        <i className="SideBarIcon  fa-brands fa-square-instagram"></i> </div>
        </div>
    </div>
  )
}
