import "./AppReadMoreButton.css"
import { Link } from 'react-router-dom'

const AppReadMoreBtn = ({ color, borderColor, text, onClick }: any) => {
    return (
        <div onClick={onClick} className="read-more-btn" style={{ color, borderColor }}>
            <div id="dub-arrow"><i className="fas fa-angle-double-right"></i></div>
            <Link style={{ color }} to="#">{text || "Read More"}</Link>
        </div>
    )
}

export default AppReadMoreBtn
