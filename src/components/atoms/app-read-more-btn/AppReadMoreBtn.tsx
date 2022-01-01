import "./AppReadMoreButton.css"
import { Link } from 'react-router-dom'

const AppReadMoreBtn = ({ color, borderColor }: any) => {
    return (
        <div className="read-more-btn" style={{ color, borderColor }}>
            <div id="dub-arrow"><i className="fas fa-angle-double-right"></i></div>
            <Link style={{ color }} to="#">Read More</Link>
        </div>
    )
}

export default AppReadMoreBtn
