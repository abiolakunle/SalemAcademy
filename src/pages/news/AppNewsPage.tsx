import "./AppNewsPage.css"
import { Col, Container, Row } from 'react-bootstrap'
import AppPageTitle from '../../components/atoms/app-page-title/AppPageTitle'
import AppHeader from '../../components/molecules/app-header/AppHeader'

const AppNewsPage = () => {
    return (
        <>

            <AppHeader
                backgroundImg={"./assets/images/home-header-banner.webp"}
                heading={<>News</>}
                paragraph={<>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, est ab. Blanditiis ullam, eaque cumque magni molestias, quas accusantium quasi consequuntur possimus, deleniti ipsam veritatis excepturi reiciendis optio iusto dolorem!</>}
                showBreadcrumb={true} />
            <AppPageTitle title="News" />

            <Container className="app-events" >
                <Row className='events '>
                    <Col md={4} >


                        <div style={{ backgroundImage: "url(./assets/images/home-header-banner.webp)" }} className="event-item">
                            <div className='date-card'>
                                <div className="data-card-bg"></div>
                                <span className='month'>Jan</span>
                                <span className='date'>5</span>
                                <span className='year'>2022</span>
                            </div>

                            <div className='title-box'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                        </div>
                    </Col>
                    <Col md={4} >


                        <div style={{ backgroundImage: "url(./assets/images/home-header-banner.webp)" }} className="event-item">
                            <div className='date-card'>
                                <div className="data-card-bg"></div>
                                <span className='month'>Jan</span>
                                <span className='date'>5</span>
                                <span className='year'>2022</span>
                            </div>

                            <div className='title-box'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                        </div>
                    </Col>
                    <Col md={4} >


                        <div style={{ backgroundImage: "url(./assets/images/home-header-banner.webp)" }} className="event-item">
                            <div className='date-card'>
                                <div className="data-card-bg"></div>
                                <span className='month'>Jan</span>
                                <span className='date'>5</span>
                                <span className='year'>2022</span>
                            </div>

                            <div className='title-box'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                        </div>
                    </Col>
                    <Col md={4} >


                        <div style={{ backgroundImage: "url(./assets/images/home-header-banner.webp)" }} className="event-item">
                            <div className='date-card'>
                                <div className="data-card-bg"></div>
                                <span className='month'>Jan</span>
                                <span className='date'>5</span>
                                <span className='year'>2022</span>
                            </div>

                            <div className='title-box'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                        </div>
                    </Col>
                    <Col md={4} >


                        <div style={{ backgroundImage: "url(./assets/images/home-header-banner.webp)" }} className="event-item">
                            <div className='date-card'>
                                <div className="data-card-bg"></div>
                                <span className='month'>Jan</span>
                                <span className='date'>5</span>
                                <span className='year'>2022</span>
                            </div>

                            <div className='title-box'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                        </div>
                    </Col>
                    <Col md={4} >


                        <div style={{ backgroundImage: "url(./assets/images/home-header-banner.webp)" }} className="event-item">
                            <div className='date-card'>
                                <div className="data-card-bg"></div>
                                <span className='month'>Jan</span>
                                <span className='date'>5</span>
                                <span className='year'>2022</span>
                            </div>

                            <div className='title-box'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AppNewsPage
