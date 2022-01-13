import "./AppAboutPage.css"
import AppPageTitle from '../../components/atoms/app-page-title/AppPageTitle'
import AppHeader from '../../components/molecules/app-header/AppHeader'
import { Col, Container, Row } from "react-bootstrap"
import AppSimplePage from "../../components/atoms/app-simple-page/AppSimplePage"

const AppAboutPage = () => {
    return (
        <>
            <AppHeader
                backgroundImg={"./assets/images/salem-academy-ground-view.jfif"}
                heading={<>About Salem Academy</>}
                paragraph={<>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, est ab. Blanditiis ullam, eaque cumque magni molestias, quas accusantium quasi consequuntur possimus, deleniti ipsam veritatis excepturi reiciendis optio iusto dolorem!</>}
                showBreadcrumb={true} />
            <AppPageTitle title="About Salem Academy" />

            <Container style={{ marginBottom: 100 }}>

                <AppSimplePage fluid>
                    <p>
                        At Salem Academy, students receive so much more than an ordinary education. We pride ourselves on creating a unique, exciting and serene environment that embraces all types of learners and promotes growth both academically and personally. For over 12 years, Salem Academy has enabled the learning and development of pupils and students by giving them the right tools and resources to truly flourish. Our team of highly qualified academic and non-academic staff focus on ensuring that each child is well educated, and that their individual needs are catered for. Like the name Salem implies, our school provides a peaceful and serene learning environment for children to excel. The training and education we offer at Salem Academy is in line with global best practices and industry standard, as all our pupils and students are equipped with 21st century skills such as creative thinking, communication, and problem solving. By the end of their education at Salem, all our pupils and students are ready for the next level of their mental and cognitive development and they will excel in all that they do. We look forward to welcoming you to Salem Academy, where everything we do is unto excellence.
                    </p>

                    <p>Interested in learning more about Salem Academy? &nbsp; We invite you to keep exploring our website, and get in touch with questions about our values, academics and more. Join Us today!</p>

                    <h3>Our Academics</h3>
                    <Row>
                        <Col>          <p>The academic program at Salem Academy places an emphasis on every aspect of student growth and development, while meeting statutory requirements. Satisfactory number of students per class and exceptional, qualified teachers allow us to offer a comfortable and inclusive educational setting, while ensuring each student receives the individualized attention and support they need.</p>
                            <p>The all-round, inclusive education on offer at Salem Academy has always been a core component of our values , and it is focused on bringing out the very best in every pupil. We are looking forward to developing this even further over the coming years.</p>
                            <p>At Salem, we have high expectations and this encourages our students to believe in themselves, to be analytical, to be resolute and to show ambition both in and out of the classroom. Our students feel happy and valued, which gives them the confidence and enthusiasm for life-long learning, needed to succeed in a fast changing world.</p>



                        </Col>
                        <Col>   <p>Respect for tradition and an openness to innovation are valued and taught and we encourage our pupils to work with, and learn from each other, whilst also showing courage to stand up for what they believe. We are confident that we can challenge and develop all those who come to us at whatever age, stretching the most able whilst supporting those who need a helping hand.</p>

                            <p>We hope that you will find our website helpful and that it will give you a sense of the values that our school stands for. It is, however, only a website and is no substitute for a visit. </p>
                            <p>We do hope you will come and see for yourself what we do at Salem Academy each and every day, and find out what it could do for your child too.</p>
                        </Col>
                    </Row>
                </AppSimplePage>
            </Container>



            <div className='app-about-us'>
                <div className="heading">
                    <h2>Our Aims and Values</h2>
                </div>
                <div>
                    <article>
                        <h2>The Root</h2>
                        <div>
                            <h3>The Root</h3>
                            <p>Salem, originates from the middle east. It simply connotes peace. The choice of the name was born out of the inspiration to create a school with an atmosphere that is peaceful, serene, non-threatening and conducive for students to learn.</p>

                        </div>
                    </article>
                    <article>
                        <h2>The Vision</h2>
                        <div>
                            <h3>The Vision</h3>
                            <p>Our Vision is to build excellence in character and learning in children. Ensuring that they attain the right foundational grooming that will make them exceptional community, corporate, and business leaders in the future</p>

                        </div>
                    </article>
                    <article>
                        <h2>The Mission</h2>
                        <div>
                            <h3>The Mission</h3>
                            <p>To remain true to our vision by creating and promoting a healthy and serene environment to raise strong and diligent minds born out of faith and discipline.</p>

                        </div>
                    </article>
                    <article>
                        <h2>The Objective</h2>
                        <div>
                            <h3>The Objective</h3>
                            <p>Building excellence in our children</p>
                            <p>Achieving high standards of academic performance.</p>
                            <p>Promoting excellent social and personal development.</p>
                            <p>Building a passion for continuous learning in children</p>
                            <p>Creating a community of future world leaders</p>
                        </div>
                    </article>
                    <article>
                        <h2>Our Values</h2>
                        <div>
                            <h3>Our Values</h3>
                            <p>Excellence</p>
                            <p>Discipline</p>
                            <p>Integrity</p>
                            <p>Faith</p>
                            <p>Respect</p>
                        </div>
                    </article>
                </div>

            </div>

        </>
    )
}

export default AppAboutPage
