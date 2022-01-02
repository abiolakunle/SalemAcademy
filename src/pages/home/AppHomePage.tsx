import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppArticleImageGrid from '../../components/atoms/app-article-image-grid/AppArticleImageGrid'
import AppArticleSection from '../../components/atoms/app-article-section/AppArticleSection'
import AppFixedParallaxSection from '../../components/atoms/app-fixed-parallax-section/AppFixedParallaxSection'
import AppHeroBanner from '../../components/atoms/app-hero-banner/AppHeroBanner'
import AppReadMoreBtn from '../../components/atoms/app-read-more-btn/AppReadMoreBtn'
import AppHeader from '../../components/molecules/app-header/AppHeader'

const AppHomePage = () => {
    return (
        <>
            <AppHeader
                heading={<>Welcome</>}
                paragraph={<>Welcome to Salem Academy. As the founder, I am passionate about Salem and our wonderful kids. It has been the pleasure of my life to create a school for future leaders, thought leaders, visionaries, professionals, and entrepreneurs who are kind, passionate, respectful, innovative and excellent at all they do.</>}
                backgroundImg={"./assets/images/home-header-banner.webp"} />
            <AppFixedParallaxSection backgroundColor={"var(--dark-blue-1)"} contentPosition={-1}>
                <h2>Our Ethos</h2>
                <p>Our Vision is to build excellence in character and learning in children. Ensuring that they attain the right foundational grooming that will make them exceptional community, corporate, and business leaders in the future</p>
                <AppReadMoreBtn borderColor="var(--white)" color="var(--white)" />
            </AppFixedParallaxSection>
            <AppFixedParallaxSection backgroundColor={"#000"} contentPosition={-2}>
                <h2>Salem Academy</h2>

            </AppFixedParallaxSection>
            <AppArticleSection>
                <h2>About Salem Academy</h2>

                <p>For over 12 years, Salem Academy has enabled pupils and students develop and learn by giving them the right tools and resources to truly flourish. Our team of highly qualified academic and non-academic staff focus on ensuring that each child is well educated, and that their individual needs are met. Like our name Salem implies, our school is a peaceful and serene learning environment for children to excel. </p>
                <p>We offer a truly global all-round education, all our pupils and students are equipped with 21st century skills such as creative thinking, communication, and critical thinking. By the end of their education at Salem, all our pupils and students are ready for the next level of their education and they will excel in all that they do. We look forward to welcoming you to Salem Academy, where everything we do is unto excellence.</p>

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
