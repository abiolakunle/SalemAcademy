
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import "./AppFooter.css"

const AppFooter = () => {
    return (
        <Container className='app-footer' fluid>
            <Row>
                <Col>
                    <h3>About</h3>
                    <Link to="#">About us</Link>
                    <Link to="#">Lorem ipsum dolor sit amet.</Link>
                    <Link to="#">Lorem ipsum dolor sit amet.</Link>
                </Col>
                <Col>
                    <h3>Admissions</h3>
                    <Link to="#">Lorem ipsum dolor sit amet.</Link>
                    <Link to="#">Lorem ipsum dolor sit amet.</Link>
                </Col>
                <Col>
                    <h3>Contact</h3>
                    <Link to="#">Lorem ipsum dolor sit amet.</Link>
                    <Link to="#">Lorem ipsum dolor sit amet.</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default AppFooter
