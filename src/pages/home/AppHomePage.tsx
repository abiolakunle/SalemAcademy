import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppArticleImageGrid from '../../components/atoms/app-article-image-grid/AppArticleImageGrid'
import AppArticleSection from '../../components/atoms/app-article-section/AppArticleSection'
import AppFixedParallaxSection from '../../components/atoms/app-fixed-parallax-section/AppFixedParallaxSection'
import AppReadMoreBtn from '../../components/atoms/app-read-more-btn/AppReadMoreBtn'
import AppHeader from '../../components/molecules/app-header/AppHeader'
import { useNavigate } from 'react-router-dom';
import "./AppHomePage.css"
// @ts-ignore
import VideoPlayer from 'react-video-js-player';

import newsItems from "../../data/news";
import { eventList } from "../../data/events"
import ReactMarkdown from 'react-markdown'

const AppHomePage = () => {
    const latestNews = newsItems[0];
    const latestEvent = eventList[0]
    const navigateTo = useNavigate();
    // eslint-disable-next-line no-restricted-globals
    var w = screen.width
    // eslint-disable-next-line no-restricted-globals
    var h = screen.height
    return (
        <div className='app-home'>

            <AppHeader
                heading={<>Welcome</>}
                paragraph={<><p>Welcome to Salem Academy. As the founder, I am passionate about Salem and our wonderful kids. It has been the pleasure of my life to create a school for future leaders, thought leaders, visionaries, professionals, and entrepreneurs who are kind, passionate, respectful, innovative and excellent at all they do. It is our aim to shape the process of creating well-rounded young people who can face the challenges of the 21st century and beyond.
                </p>
                    <p>Our success is primarily down to our overarching principle and belief in excellence, it is indeed the founding block of our school. All our teachers and students have fully embraced our value of excellence and as such, it defines all that we do. I believe that today’s students will be tomorrow’s citizens, leaders, workers, and parents. therefore, a good education is an investment with enduring benefits.</p>
                </>}
                backgroundImg={"./assets/images/home-header-banner.webp"} />





            <AppFixedParallaxSection backgroundColor={"var(--dark-blue-1)"} contentPosition={-1}>
                <h2>Our Vision</h2>
                <p>Our Vision is to build excellence in character and learning in children. Ensuring that they attain the right foundational grooming that will make them exceptional community, corporate, and business leaders in the future</p>
                <AppReadMoreBtn onClick={() => { navigateTo("about") }} borderColor="var(--white)" color="var(--white)" />
            </AppFixedParallaxSection>
            <AppFixedParallaxSection backgroundImage="./assets/images/selem-chem.jfif" contentPosition={-2} showOvelay={true}>
                <h2>Salem Academy</h2>

            </AppFixedParallaxSection>

            <VideoPlayer
                controls={true}
                src={"./assets/videos/SalemAcademy.mp4"}

                width={w}
                height={h}

            />
            <AppArticleSection>
                <h2>About Salem Academy</h2>

                <p>For over 12 years, Salem Academy has enabled pupils and students develop and learn by giving them the right tools and resources to truly flourish. Our team of highly qualified academic and non-academic staff focus on ensuring that each child is well educated, and that their individual needs are met. Like our name Salem implies, our school is a peaceful and serene learning environment for children to excel. </p>
                <AppReadMoreBtn onClick={() => { navigateTo("about") }} />

            </AppArticleSection>
            <AppArticleImageGrid backgroundColor="var(--green-grey)" imageUrl="./assets/images/Salem8.jpg" imageFirst={true} >
                <span className="home-date">
                    {latestNews.date.toDateString()}
                </span>
                <h2>Latest News</h2>

                <ReactMarkdown>{latestNews.body.slice(0, 200) + "..."}</ReactMarkdown>

                <AppReadMoreBtn onClick={() => { navigateTo("/news") }} />
            </AppArticleImageGrid>
            <AppArticleImageGrid backgroundColor="var(--dark-blue-1)" color="var(--white)" imageUrl="./assets/images/volleyball.jfif" imageFirst={false} >
                <span className="home-date">
                    {latestEvent.date.toDateString()}
                </span>
                <h2>Upcoming Event</h2>
                <p>
                    {latestEvent.title}  </p>

                <AppReadMoreBtn text="See More Events" onClick={() => { navigateTo("events") }} color="var(--white)" borderColor="var(--white)" />
            </AppArticleImageGrid>
            {/* <AppArticleImageGrid backgroundColor="var(--light-grey)" imageUrl="./assets/images/home-header-banner.webp" imageFirst={true} >
                <span className="news-date">
                    17 December 2021
                </span>
                <h2>Latest News</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aliquam inventore nisi ipsam illo maxime soluta et enim deleniti, tempore odio quam ex. Magnam at fugit, ex tempora saepe nesciunt.    </p>

                <AppReadMoreBtn />
            </AppArticleImageGrid> */}
            {/* <AppHeroBanner backgroundImageUrl={"./assets/images/home-header-banner.webp"} /> */}


            <Container fluid style={{ backgroundColor: "var(--green-grey)" }}>
                <Row>
                    <Col md={12}>
                        <AppArticleSection backgroundColor="var(--green-grey)">
                            <h2>Join Salem Academy Today</h2>

                            <p>The training and education we offer at Salem Academy is in line with global best practices and industry standard, as all our pupils and students are equipped with 21st century skills such as creative thinking, communication, and problem solving. By the end of their education at Salem, all our pupils and students are ready for the next level of their mental and cognitive development and they will excel in all that they do. We look forward to welcoming you to Salem Academy, where everything we do is unto excellence.</p>
                            <AppReadMoreBtn onClick={() => { navigateTo("/admissions") }} text="Join Now!!" />
                        </AppArticleSection>
                    </Col>
                    {/* <Col md={6}>
                        <AppArticleSection backgroundColor="var(--green-grey)" >
                            <h2>Support us</h2>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quo maxime nulla suscipit error nesciunt eligendi ullam aperiam ipsa dolores cupiditate exercitationem nisi quasi quis, asperiores sunt veniam at voluptatibus.</p>

                        </AppArticleSection>
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}

export default AppHomePage
