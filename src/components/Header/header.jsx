import "./header.css"
import logo from "../../assets/fi_menu.png"
import rectangle from "../../assets/Rectangle 63.png"
import home from "../../assets/Home.png"
import cars from "../../assets/Administrator.png"
import logoRectangle from "../../assets/Rectangle 62.png"
import SidebarMenu from "react-bootstrap-sidebar-menu"
import {SidebarMenuCollapse,SidebarMenuHeader,SidebarMenuBody, SidebarMenuNav, SidebarMenuNavLink} from "react-bootstrap-sidebar-menu"
function Header(){



    return(
      <>
        <div >
        <SidebarMenu
      expand="lg"
      hide="md"
    >
        <SidebarMenuCollapse expand className="sidebar">
      <SidebarMenuHeader>
        <SidebarMenu.Brand>
        <img src={rectangle} style={{padding:16}}/>
        </SidebarMenu.Brand>
      </SidebarMenuHeader>
      <SidebarMenuBody>
      <SidebarMenuNav>
      <SidebarMenuNavLink>
        <SidebarMenu.Nav.Icon>
        <img src={home}/>
        </SidebarMenu.Nav.Icon>
      </SidebarMenuNavLink>
      <SidebarMenuNavLink>
        <img src={cars}/>
      </SidebarMenuNavLink>
      </SidebarMenuNav>
      </SidebarMenuBody>
    </SidebarMenuCollapse>
    </SidebarMenu>
    <div className="header">
            <div >
              <img src = {logoRectangle} className="logoRectangle"/>
            <img src={logo}  className="side-button"/>
            </div>
            <div className="searchbar">
            <input type="text" placeholder="search"/>
            <button className ="search-button">Search</button>
            <div className="userBox">
            <div className="user">
            U
            </div>
            <div className="name">
              Unis Badri
            </div>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Header