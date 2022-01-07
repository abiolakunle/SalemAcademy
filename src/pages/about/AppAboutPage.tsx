import "./AppAboutPage.css"
import AppPageTitle from '../../components/atoms/app-page-title/AppPageTitle'
import AppHeader from '../../components/molecules/app-header/AppHeader'
import { Container } from "react-bootstrap"

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
                <p>For over 12 years, Salem Academy has enabled pupils and students develop and learn by giving them the right tools and resources to truly flourish. Our team of highly qualified academic and non-academic staff focus on ensuring that each child is well educated, and that their individual needs are met. Like our name Salem implies, our school is a peaceful and serene learning environment for children to excel. We offer a truly global all-round education, all our pupils and students are equipped with 21st century skills such as creative thinking, communication, and critical thinking. By the end of their education at Salem, all our pupils and students are ready for the next level of their education and they will excel in all that they do. We look forward to welcoming you to Salem Academy, where everything we do is unto excellence.</p>
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
