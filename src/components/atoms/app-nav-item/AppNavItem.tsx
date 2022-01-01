
import { Link } from 'react-router-dom'

import "./AppNavItem.css"

const AppNavItem = ({ linkText, onClick }: any) => {
    return (
        <>
            <li className='app_nav_item' onClick={onClick}>

                <Link to="#">{linkText}</Link>
                {/* <i className="fas fa-solid fa-angle-right fa-2x"></i> */}
                {!!onClick ?
                    <div className="round">
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
