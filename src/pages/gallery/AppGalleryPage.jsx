
import { Space } from "antd";
import { Col, Container, Row } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import AppPageTitle from "../../components/atoms/app-page-title/AppPageTitle";
import AppHeader from "../../components/molecules/app-header/AppHeader";
import "./AppGalleryPage.css"

const options = {
    buttons: {
        iconPadding: "7px",
        iconColor: "#FE938C",
    },
    caption: {
        captionFontFamily: "Montserrat, sans-serif",
        captionFontSize: "18px",
        captionContainerPadding: "20px 10px",
        captionColor: "#FE938C",
        captionFontWeight: 700,
        captionTextTransform: "uppercase",
    },
    settings: {
        overlayColor: "rgba(93, 87, 107, 0.9)",
        lightboxTransitionSpeed: 0.6,
        slideAnimationType: "fade",
        slideSpringValues: [300, 200],
        autoplaySpeed: 3000,
        hideControlsAfter: false,
    },
    progressBar: {
        height: "3px",
        fillColor: "#FE938C",
        backgroundColor: "rgba(43, 45, 66, 0.9)",
    },
    thumbnails: {
        showThumbnails: true,
        thumbnailsPosition: "right",
        thumbnailsOpacity: 0.4,
        thumbnailsAlignment: "space-between",
        thumbnailsSize: ["130px", "100px"],
    },
};

const AppGalleryPage = () => {

    const photos = [
        { imageUrl: "./assets/images/fine_art.jfif", title: "Salem" },
        { imageUrl: "./assets/images/home_econs.jfif", title: "Salem" },
        { imageUrl: "./assets/images/volleyball.jfif", title: "Salem" },
        { imageUrl: "./assets/images/nurrsery.webp", title: "Salem" },
        { imageUrl: "./assets/images/Salem7.jpg", title: "Salem" },
        { imageUrl: "./assets/images/Salem10.jpg", title: "Salem" },
        { imageUrl: "./assets/images/selem-chem.jfif", title: "Salem" },
        { imageUrl: "./assets/images/creche.webp", title: "Salem" }];

    return (
        <div>
            <AppHeader
                backgroundImg={"./assets/images/fine_art.jfif"}
                heading={<>Gallery</>}
                paragraph={<>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, est ab. Blanditiis ullam, eaque cumque magni molestias, quas accusantium quasi consequuntur possimus, deleniti ipsam veritatis excepturi reiciendis optio iusto dolorem!</>}
                showBreadcrumb={true} />
            <AppPageTitle title="Gallery" />
            <Container fluid className="app-gallery">
                <SimpleReactLightbox>
                    <SRLWrapper options={options}>


                        <Row>
                            {photos.map(({ imageUrl, title }, id) => (
                                <Col className="picture" key={id} md={3} >
                                    <a href={imageUrl} data-attribute="SRL">
                                        <img className="app-gallery-image" src={imageUrl} alt={title} />
                                    </a>

                                </Col>

                            ))}
                        </Row>


                    </SRLWrapper>
                </SimpleReactLightbox>
            </Container>
        </div>
    )
}

export default AppGalleryPage
