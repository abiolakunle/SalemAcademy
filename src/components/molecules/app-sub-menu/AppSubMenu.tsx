

import "./AppSubMenu.css"
const AppSubMenu = ({ openPosition, closedPosition, children, open }: any) => {
    return (
        <div style={{ left: open ? openPosition : closedPosition }} className="app-sub-sidenav">
            <ul className="sub-menu_sidebar">
                {children}
            </ul>
        </div>
    )
}

export default AppSubMenu
