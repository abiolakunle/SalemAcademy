
import { Link } from 'react-router-dom'
import "./AppNavItem.css"

const AppNavItem = ({ linkText }: any) => {
    return (
        <li className='app_nav_item'>
            <Link to="#">{linkText}</Link>
        </li>
    )
}

export default AppNavItem
