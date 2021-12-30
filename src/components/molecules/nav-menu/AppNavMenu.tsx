import { Link } from "react-router-dom"
import AppNavItem from "../../atoms/app-nav-item/AppNavItem"
import "./AppNavMenu.css"

const AppNavMenu = ({ open, setMenuOpened }: any) => {
    return (
        <div className="app-nav-menu-body-pushed">
            <div id="app-nav-menu-overlay-wrapper" style={{ visibility: open ? "visible" : "hidden", zIndex: 3 }}>
                <div id="app-nav-menu-overlay"></div>
                <div className="app-nav-menu-nav-bg_item -top"></div>
                <div className="app-nav-menu-nav-bg_item -bottom"></div>
            </div>
            <div id="mySidenav" style={{ left: open ? 0 : -450 }} className="sidenav">
                <ul className="menu_sidebar">
                    <li><Link to="#" onClick={() => setMenuOpened(!open)} className="close_btn">&times;</Link></li>
                    <AppNavItem linkText="Homes" />
                    <AppNavItem linkText="About Us" />
                    <AppNavItem linkText="Admissions" />
                    <AppNavItem linkText="Gallery" />

                </ul>
            </div>
        </div>
    )
}

export default AppNavMenu
