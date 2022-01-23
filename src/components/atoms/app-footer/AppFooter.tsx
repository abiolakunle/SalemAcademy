
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import "./AppFooter.css"

const AppFooter = () => {
    return (
        <Container className='app-footer' fluid>
            <Row>
                <Col md={3}>
                    <h3>Salem Academy</h3>
                    <p>
                        Federal Housing Authority Estate, 12 Road, and phase ii by Total Filling Station, Lugbe, Abuja.
                    </p>

                </Col>
                <Col md={3}>
                    <h3>About</h3>
                    <p>
                        Our team of highly qualified academic and non-academic staff focus on ensuring that each child is well educated, and that their individual needs are met. Like our name Salem implies, our school is a peaceful and serene learning environment for children to excel.
                    </p>
                </Col>
                <Col md={3}>
                    <h3>Our Schools</h3>
                    <Link to="secondary-school">Secondary</Link>
                    <Link to="primary-school">Primary</Link>
                    <Link to="nursery-school">Nursery</Link>
                    <Link to="creche-school">Busy busy crèche</Link>
                </Col>
                <Col md={3}>
                    <h3>Contact</h3>
                    <a href='tel:+2348106035445'>+2348106035445</a>

                    <a href='tel:+2348136372870'> +2348136372870</a>

                    <a href='mailto:info@salemacademyng.com'>info@salemacademyng.com</a>
                </Col>

                <Col className='socials' sm={12}>
                    <h3>Social</h3>
                    {/* <Link to="#" className='social'><i className="fab fa-twitter"></i></Link> */}
                    <div>
                        <a rel="noreferrer" target="_blank" href="https://web.facebook.com/SalemAcademyLugbeAbuja" className='social'><i className="fab fa-facebook"></i></a>
                        <a rel="noreferrer" href="https://www.instagram.com/salemacademylugbeabuja" target="_blank" className='social'><i className="fab fa-instagram"></i></a>
                        <a rel="noreferrer" href="https://www.linkedin.com/company/salem-academy-abuja" target="_blank" className='social'><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AppFooter
