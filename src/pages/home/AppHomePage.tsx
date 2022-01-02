import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppArticleImageGrid from '../../components/atoms/app-article-image-grid/AppArticleImageGrid'
import AppArticleSection from '../../components/atoms/app-article-section/AppArticleSection'
import AppFixedParallaxSection from '../../components/atoms/app-fixed-parallax-section/AppFixedParallaxSection'
import AppHeroBanner from '../../components/atoms/app-hero-banner/AppHeroBanner'
import AppHeader from '../../components/molecules/app-header/AppHeader'

const AppHomePage = () => {
    return (
        <>
            <AppHeader
                heading={<>Welcome</>}
                paragraph={<>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, est ab. Blanditiis ullam, eaque cumque magni molestias, quas accusantium quasi consequuntur possimus, deleniti ipsam veritatis excepturi reiciendis optio iusto dolorem!</>}
                backgroundImg={"./assets/images/home-header-banner.webp"} />
            <AppFixedParallaxSection backgroundColor={"var(--dark-blue-1)"} contentPosition={-1}>
                <h2>Our Ethos</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aliquid corporis provident nobis? Vel dolor itaque saepe temporibus. Dolores quidem voluptatibus a fuga repudiandae pariatur debitis cumque laboriosam perspiciatis atque. Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
            </AppFixedParallaxSection>
            <AppFixedParallaxSection backgroundColor={"#000"} contentPosition={-2}>
                <h2>Salem Academy</h2>

            </AppFixedParallaxSection>
            <AppArticleSection>
                <h2>About Salem Academy</h2>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quo maxime nulla suscipit error nesciunt eligendi ullam aperiam ipsa dolores cupiditate exercitationem nisi quasi quis, asperiores sunt veniam at voluptatibus.</p>

            </AppArticleSection>
            <AppArticleImageGrid backgroundColor="var(--green-grey)" imageUrl="./assets/images/home-header-banner.webp" imageFirst={true} />
            <AppArticleImageGrid backgroundColor="var(--dark-blue-1)" color="var(--white)" imageUrl="./assets/images/home-header-banner.webp" imageFirst={false} />
            <AppArticleImageGrid backgroundColor="var(--light-grey)" imageUrl="./assets/images/home-header-banner.webp" imageFirst={true} />
            <AppHeroBanner backgroundImageUrl={"./assets/images/home-header-banner.webp"} />


            <Container fluid style={{ backgroundColor: "var(--green-grey)" }}>
                <Row>
                    <Col md={6}>
                        <AppArticleSection backgroundColor="var(--green-grey)">
                            <h2>Join us</h2>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quo maxime nulla suscipit error nesciunt eligendi ullam aperiam ipsa dolores cupiditate exercitationem nisi quasi quis, asperiores sunt veniam at voluptatibus.</p>

                        </AppArticleSection>
                    </Col>
                    <Col md={6}>
                        <AppArticleSection backgroundColor="var(--green-grey)" >
                            <h2>Support us</h2>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quo maxime nulla suscipit error nesciunt eligendi ullam aperiam ipsa dolores cupiditate exercitationem nisi quasi quis, asperiores sunt veniam at voluptatibus.</p>

                        </AppArticleSection>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AppHomePage
