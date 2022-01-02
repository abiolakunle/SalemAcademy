
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import "./AppFooter.css"

const AppFooter = () => {
    return (
        <Container className='app-footer' fluid>
            <Row>
                <Col>
                    <h3>Salem Academy</h3>
                    <p>
                        Federal Housing Authority Estate, 12 Road, and phase ii by Total Filling Station, Lugbe, Abuja.
                    </p>

                </Col>
                <Col>
                    <h3>About</h3>
                    <p>
                        Elementary School is truly an extraordinary place of learning. Our talented staff provides each student with a rigorous standards, high academic.
                    </p>
                </Col>
                <Col>
                    <h3>Admissions</h3>
                    <Link to="#">Primary</Link>
                    <Link to="#">Secondary</Link>
                </Col>
                <Col>
                    <h3>Contact</h3>
                    <p>+2348106035445 or +2348136372870</p>
                    <a href='mailto:info@salemacademyng.com'>info@salemacademyng.com</a>
                </Col>

                <Col sm={12}>
                    <h3>Social</h3>
                    <Link to="#" className='social'><i className="fab fa-twitter"></i></Link>
                    <Link to="#" className='social'><i className="fab fa-facebook"></i></Link>
                    <Link to="#" className='social'><i className="fab fa-instagram"></i></Link>
                </Col>
            </Row>
        </Container>
    )
}

export default AppFooter
