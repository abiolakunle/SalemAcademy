import { Container, Row, Col } from "react-bootstrap";
import AppPageTitle from "../../components/atoms/app-page-title/AppPageTitle";
import AppHeader from "../../components/molecules/app-header/AppHeader";
import "./AppContactPage.css"
import emailLottie from "../../assets/lottie/email.json"
import Lottie from "react-lottie";
import phoneLottie from "../../assets/lottie/phone.json"
import mapLottie from "../../assets/lottie/map.json"
import callLottie from "../../assets/lottie/call.json"
import { Link } from "react-router-dom";
import GoogleMapReact from 'google-map-react';

const AppContactPage = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,

        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const phone = {
        ...defaultOptions,
        animationData: phoneLottie,
    }


    const map = {
        ...defaultOptions,
        animationData: mapLottie,
    }

    const email = {
        ...defaultOptions,
        animationData: emailLottie,
    }

    const call = {
        ...defaultOptions,
        animationData: callLottie,
    }

    const MarkerComponent = ({ icon }: any) => <div>{icon}</div>;

    const defaultProps = {
        center: {
            lat: 8.990606790568766,
            lng: 7.362837410766699
        },
        zoom: 11
    };

    return (<>       <AppHeader
        backgroundImg={"./assets/images/salem13.jpg"}
        heading={<>Contact us</>}
        paragraph={<>We pride ourselves on creating a unique, exciting and serene environment that embraces all types of learners and promotes growth both academically and personally. For over 12 years, Salem Academy has enabled the learning and development of pupils and students by giving them the right tools and resources to truly flourish. </>}
        showBreadcrumb={true} />
        <AppPageTitle title="Contact us" />       <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCVYpjVFIupyMOO3qaeCnAQnQf0nZaGae0" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <MarkerComponent
                    lat={59.955413}
                    lng={30.337844}
                    icon={<i style={{ color: "crimson" }} className="fas fa-map-marker-alt"></i>}
                />
            </GoogleMapReact>
        </div> <Container fluid>
            <Row className="contact-items">
                <Col className="contact-box" md={3}>
                    <img width="100%" src="./assets/images/Salem1.jpg" alt="salem" />

                </Col>
                <Col className="contact-box" md={3}>
                    <div className="contact-icon">
                        <Lottie width="30%" options={map} />
                    </div>
                    <h4>Address: </h4>
                    <p>
                        Federal Housing Authority Estate, 12 Road, and phase ii by Total Filling Station, Lugbe, Abuja.
                    </p>
                </Col>
                <Col className="contact-box" md={3}>
                    <img width="100%" src="./assets/images/Salem3.jpg" alt="salem" />
                </Col>
                <Col className="contact-box" md={3}>
                    <div className="contact-icon">
                        <Lottie width="20%" options={phone} />
                    </div>
                    <h4>Social:</h4>

                    {/* <Link to="#" className='social'><i className="fab fa-twitter fa-2x"></i></Link> */}
                    <a rel="noreferrer" target="_blank" href="https://web.facebook.com/SalemAcademyLugbeAbuja" className='social'><i className="fab fa-facebook"></i></a>
                    <a rel="noreferrer" href="https://www.instagram.com/salemacademylugbeabuja" target="_blank" className='social'><i className="fab fa-instagram"></i></a>
                    <a rel="noreferrer" href="https://www.linkedin.com/company/salem-academy-abuja" target="_blank" className='social'><i className="fab fa-linkedin-in"></i></a>
                </Col>
                <Col className="contact-box" md={3}>
                    <div className="contact-icon">
                        <Lottie width="20%" options={call} />
                    </div>
                    <h4>Phone:</h4>
                    <p><a href="tel:+2348106035445">+2348106035445</a></p>
                    <p><a href="tel:+2348136372870">+2348136372870</a></p>

                </Col>
                <Col className="contact-box" md={3}>
                    <img width="100%" src="./assets/images/Salem10.jpg" alt="salem" />

                </Col>
                <Col md={3}>
                    <div className="contact-icon">
                        <Lottie width="30%" options={email} />
                    </div>
                    <h4>Email:</h4>
                    <p><a href="mailto:info@salemacademyng.com">info@salemacademyng.com</a></p>
                </Col>
                <Col className="contact-box" md={3}>
                    <img width="100%" src="./assets/images/Salem7.jpg" alt="salem" />
                </Col>
            </Row>
        </Container>
    </>

    )
}

export default AppContactPage
