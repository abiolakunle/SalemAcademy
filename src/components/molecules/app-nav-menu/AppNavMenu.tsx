import { Link } from "react-router-dom"
import "./AppNavMenu.css"

const AppNavMenu = ({ open, setMenuOpened, openPosition, closedPosition, children }: any) => {
    return (
        <div className="app-nav-menu-body-pushed">
            <div id="app-nav-menu-overlay-wrapper" style={{ visibility: open ? "visible" : "hidden", zIndex: 3 }}>
                <div id="app-nav-menu-overlay"></div>
                <div className="app-nav-menu-nav-bg_item -top"></div>
                <div className="app-nav-menu-nav-bg_item -bottom"></div>
            </div>
            <div id="mySidenav" style={{ left: open ? openPosition : closedPosition }} className="sidenav">
                <ul className="menu_sidebar">
                    <li><Link to="#" onClick={() => setMenuOpened(!open)} className="close_btn">&times;</Link></li>
                    {children}
                </ul>
            </div>
        </div>
    )
}

export default AppNavMenu
