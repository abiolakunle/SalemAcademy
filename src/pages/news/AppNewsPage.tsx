import "./AppNewsPage.css"
import { Col, Container, Modal, Row } from 'react-bootstrap'
import AppPageTitle from '../../components/atoms/app-page-title/AppPageTitle'
import AppHeader from '../../components/molecules/app-header/AppHeader'
import { useState } from "react"
import ReactMarkdown from 'react-markdown'

import newsItems from "../../data/news";
const emptyItem: any = null;

const AppNewsPage = () => {


    const [currentNews, setCurrentNews] = useState(emptyItem);

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
                    {
                        newsItems.map((item, index) => (
                            <Col md={4} key={index} >


                                <div onClick={() => setCurrentNews(item)} style={{ backgroundImage: `url(${item.image})` }} className="event-item">
                                    <div className='date-card'>
                                        <div className="data-card-bg"></div>
                                        <span className='month'>{item.date.toLocaleString('default', { month: 'long' })}</span>
                                        <span className='date'>{item.date.getDate()}</span>
                                        <span className='year'>{item.date.getFullYear()}</span>
                                    </div>

                                    <div className='title-box'>
                                        <p>{item.heading}</p>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }

                </Row>
            </Container>

            {
                !!currentNews && <Modal
                    show={!!currentNews}
                    onHide={() => setCurrentNews(emptyItem)}
                    backdrop="static"
                    size="lg"
                    aria-labelledby="example-custom-modal-styling-title"

                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            {currentNews.heading}
                        </Modal.Title>
                    </Modal.Header>

                    <div style={{ height: "400px", backgroundImage: `url(${currentNews.image})`, backgroundSize: "cover" }}>

                    </div>
                    <Modal.Body style={{ backgroundColor: "var(--white)" }} >
                        <Container >
                            <ReactMarkdown

                                components={{

                                    p: ({ node, ...props }) => <p style={{ color: 'var(--primary)' }} {...props} />
                                }}
                            >{currentNews.body}</ReactMarkdown>
                        </Container>
                    </Modal.Body>
                </Modal>
            }
        </>
    )
}

export default AppNewsPage
