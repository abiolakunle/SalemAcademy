import "./AppNewsPage.css"
import { Col, Container, Row } from 'react-bootstrap'
import AppPageTitle from '../../components/atoms/app-page-title/AppPageTitle'
import AppHeader from '../../components/molecules/app-header/AppHeader'

const AppNewsPage = () => {
    return (
        <>

            <AppHeader
                backgroundImg={"./assets/images/comp.jfif"}
                heading={<>News</>}
                paragraph={<>Learning at Salem secondary school takes place in a world-class facility that houses classrooms, laboratories, a state-of-the-art ICT center, an interactive library, and student-teacher learning resources.</>}
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

                            <div className='title-box'>
                                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                            </div>
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

                            <div className='title-box'>
                                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                            </div>
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

                            <div className='title-box'>
                                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                            </div>
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

                            <div className='title-box'>
                                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                            </div>
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

                            <div className='title-box'>
                                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                            </div>
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

                            <div className='title-box'>

                                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AppNewsPage
