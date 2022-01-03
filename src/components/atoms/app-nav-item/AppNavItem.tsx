


import { Link, NavLink } from "react-router-dom"
import "./AppNavItem.css"

const AppNavItem = ({ linkText, onClick, children, to = "#" }: any) => {
    return (
        <>
            <li>

                {!!children ? <Link className='app_nav_item' onClick={() => { onClick(<ul>{children}</ul>) }} to="#"><span>{linkText}</span>
                    <div className="menu-arrows">
                        <div id="cta">
                            <span className="arrow primera next "></span>
                            <span className="arrow segunda next "></span>
                        </div>
                    </div>
                </Link> :
                    <NavLink onClick={() => { onClick(false) }} className='app_nav_item' to={to}>{linkText}</NavLink>}

            </li>

        </>
    )
}

export default AppNavItem
