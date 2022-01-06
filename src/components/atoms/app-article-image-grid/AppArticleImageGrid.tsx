import { Col, Container, Row } from "react-bootstrap"
import AppReadMoreBtn from "../app-read-more-btn/AppReadMoreBtn"
import "./AppArticleImageGrid.css"

const AppArticleImageGrid = ({ backgroundColor, imageUrl, imageFirst, color, children }: any) => {


    const image = () => {
        return (<Col md={7} className="col-image" style={{ background: `url('${imageUrl}') no-repeat center center / cover`, padding: "0px" }}>
        </Col>)
    }

    const text = () => {
        return (
            <Col md={5} className="col-text" style={{ backgroundColor, color, padding: "0px" }}>


                <div className="aligner-item">
                    {children}
                </div>
            </Col>
        )

    }

    const items = imageFirst ? [image, text] : [text, image]

    return (
        <Container fluid>
            <Row className="app-article-image-grid">
                {items.map((Item, index) => <Item key={index} />)}
            </Row>
        </Container>
    )
}

export default AppArticleImageGrid
