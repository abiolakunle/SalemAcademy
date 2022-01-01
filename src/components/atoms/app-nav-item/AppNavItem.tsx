
import { Link } from 'react-router-dom'

import "./AppNavItem.css"

const AppNavItem = ({ linkText, onClick, children }: any) => {
    return (
        <>
            <li className='app_nav_item' onClick={() => { onClick(children) }}>

                <Link to="#">{linkText}</Link>
                {/* <i className="fas fa-solid fa-angle-right fa-2x"></i> */}
                {!!onClick ?
                    <div className="menu-arrows">
                        <div id="cta">
                            <span className="arrow primera next "></span>
                            <span className="arrow segunda next "></span>
                        </div>
                    </div>
                    : ""}
            </li>

        </>
    )
}

export default AppNavItem
