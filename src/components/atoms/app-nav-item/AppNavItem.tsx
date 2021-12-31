
import { Link } from 'react-router-dom'
import AppSubMenu from '../../molecules/app-sub-menu/AppSubMenu'
import "./AppNavItem.css"

const AppNavItem = ({ linkText, hasSubMenu }: any) => {
    return (
        <>
            <li className='app_nav_item'>
                <Link to="#">{linkText}</Link>
                {/* <i className="fas fa-solid fa-angle-right fa-2x"></i> */}
            </li>
            {/* <AppSubMenu openPosition={450} closedPosition={0} open={true}>
                <h3>Sub menu</h3>
            </AppSubMenu> */}
        </>
    )
}

export default AppNavItem
