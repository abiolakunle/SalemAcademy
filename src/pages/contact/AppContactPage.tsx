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
        backgroundImg={"./assets/images/home-header-banner.webp"}
        heading={<>Contact us</>}
        paragraph={<>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, est ab. Blanditiis ullam, eaque cumque magni molestias, quas accusantium quasi consequuntur possimus, deleniti ipsam veritatis excepturi reiciendis optio iusto dolorem!</>}
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
                    <img width="100%" src="./assets/images/home-header-banner.webp" alt="salem" />

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
                    <img width="100%" src="./assets/images/home-header-banner.webp" alt="salem" />
                </Col>
                <Col className="contact-box" md={3}>
                    <div className="contact-icon">
                        <Lottie width="20%" options={phone} />
                    </div>
                    <h4>Social:</h4>

                    <Link to="#" className='social'><i className="fab fa-twitter fa-2x"></i></Link>
                    <Link to="#" className='social'><i className="fab fa-facebook fa-2x"></i></Link>
                    <Link to="#" className='social'><i className="fab fa-instagram  fa-2x"></i></Link>
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
                    <img width="100%" src="./assets/images/home-header-banner.webp" alt="salem" />

                </Col>
                <Col md={3}>
                    <div className="contact-icon">
                        <Lottie width="30%" options={email} />
                    </div>
                    <h4>Email:</h4>
                    <p><a href="mailto:info@salemacademyng.com">info@salemacademyng.com</a></p>
                </Col>
                <Col className="contact-box" md={3}>
                    <img width="100%" src="./assets/images/home-header-banner.webp" alt="salem" />
                </Col>
            </Row>
        </Container>
    </>

    )
}

export default AppContactPage
