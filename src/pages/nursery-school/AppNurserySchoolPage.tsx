import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AppPageTitle from '../../components/atoms/app-page-title/AppPageTitle'
import AppSimplePage from '../../components/atoms/app-simple-page/AppSimplePage'
import AppHeader from '../../components/molecules/app-header/AppHeader'

const AppNurserySchoolPage = () => {
    return (
        <>
            <AppHeader
                backgroundImg={"/assets/images/fine_art.jfif"}
                heading={<>Nursery School</>}
                paragraph={<>“Education is not something that a teacher does, it is a natural process that develops spontaneously in a human” – Maria Montessori </>}
                showBreadcrumb={true} />
            <AppPageTitle title="Nursery School" />

            <AppSimplePage>
                <Row>
                    <Col>
                        <p>At our Nursery School we have one aim, to give each pupil an education which enables them to become excellent. We focus on academic excellence, character development and the nurturing of a global perspective, we equip children for all the challenges that life can offer.</p>


                        <p>We foster a love of learning within each child, for them to be curious and ambitious so that they leave nursery school confident and excited about the future.</p>

                        <p>At Salem Academy the Nursery School is usually the earliest level a child begins their formal education, as such we take extra care to ensure that they feel welcome, comfortable, and happy to make the transition from being exclusively with parents and caregivers, to being in school.</p>

                    </Col>
                    <Col>
                        <p>Salem Nursery has been in operation for over 10 years and in those years, we have entrenched the overall vision of the entire academy which is building excellence in character and learning into all that we do. We remain true to this by creating and promoting a healthy and serene atmosphere for raising strong and sound minds borne out of faith.
                        </p>

                        <p>Children learn in spacious, well decorated classrooms, furnished with instructional materials, educational toys and audio-visual teaching resources. Our teachers and assistants are well experienced, committed, caring, loving and motherly.  We also understand the importance of discovery and curiosity at the early levels of a child’s life and as such many other co-curricular activities take place in the school including; the fun day, toy day, cultural day, career day, excursions, and creative and practical activities such as bead making, color sorting, paper collage, mat knitting, shape cutting and so many other activities for their all round development.</p>
                    </Col>
                </Row>

                <h3>Nursery Grades</h3>
                <ul>
                    <li><i className="fas fa-check-double"></i> &nbsp;<b> Pre-kindergarten 1:</b> &nbsp; children from Ages 20 months (1 yr. 8 Mnths) – 28 months (2yrs. 4Mths)</li>
                    <li><i className="fas fa-check-double"></i> &nbsp; <b>Pre-Kindergarten 2:</b> &nbsp; children from Ages 28 months (2yrs. 4Mnths) - 36 months (3yrs)</li>
                    <li><i className="fas fa-check-double"></i> &nbsp; <b>Kindergarten 1:</b> &nbsp; Ages 3-4</li>
                    <li><i className="fas fa-check-double"></i> &nbsp;<b>Kindergarten 2:</b> &nbsp; Ages 4-5 </li>
                </ul>
                <p>Besides a conducive atmosphere, our careful approach to academic development and wellbeing ensures that our children thrive. We foster a love for learning from the youngest age, where every Nursery child has a bespoke learning programme tailored around their interests and needs and we help them become confident and independent individuals.</p>

                <p>From the day a child joins us, we help prepare them for the next level, ensuring our Nursery children are Primary school ready with reading, writing, phonics and Mathematics above age-related expectations. </p>

                <p>We are extremely conscious of the children’s social and emotional development, and as such we make sure that Salem Nursery feels like a home away from home.</p>
                <p>Our Nursery is open from 08:00am to 4:00pm, Monday to Fridays, for more than 43 weeks of the year.</p>
            </AppSimplePage>
        </>
    )
}

export default AppNurserySchoolPage
