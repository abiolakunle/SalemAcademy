import "./AppReadMoreButton.css"
import { Link } from 'react-router-dom'

const AppReadMoreBtn = () => {
    return (
        <div id="button-7">
            <div id="dub-arrow"><i className="fas fa-angle-double-right"></i></div>
            <Link to="#">Read More</Link>
        </div>
    )
}

export default AppReadMoreBtn
