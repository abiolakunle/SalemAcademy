import { Link } from "react-router-dom"
import AppReadMoreBtn from "../app-read-more-btn/AppReadMoreBtn"
import "./AppArticleSection.css"

const AppArticleSection = ({ items, backgroundColor, children }: any) => {
    return (
        <div style={{ backgroundColor }} className="app-article-section">
            {children}
            {/* <Link to="#">Read more <i className="fas fa-arrow-right"></i></Link> */}

        </div>
    )
}

export default AppArticleSection



