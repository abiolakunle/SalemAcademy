import "./AppArticleImageGrid.css"

const AppArticleImageGrid = ({ backgroundColor, imageUrl, imageFirst }: any) => {


    const image = () => {
        return (<div className="col-image" style={{ background: `url('${imageUrl}') no-repeat center center / cover` }}>
        </div>)
    }

    const text = () => {
        return (
            <div className="col-text" style={{ backgroundColor }}>


                <div className="aligner-item">

                    <span className="news-date">
                        17 December 2021				</span>
                    <h2>Latest News</h2>
                    <p>
                        Football unites the Westminster community to help London’s refugees    </p>

                    <a className="layout-item-button" href="https://www.westminster.org.uk/football-unites-the-westminster-community-to-help-londons-refugees/">read more →</a>&nbsp;&nbsp;
                    <a className="layout-item-button" href="/news-archive">All news →</a>


                </div>
            </div>
        )

    }

    const items = imageFirst ? [image, text] : [text, image]

    return (
        <div className="app-article-image-grid">
            {items.map((Item, index) => <Item key={index} />)}
        </div>
    )
}

export default AppArticleImageGrid
