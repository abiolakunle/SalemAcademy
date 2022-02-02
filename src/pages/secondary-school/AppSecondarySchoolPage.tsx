import "./AppSecondarySchoolPage.css";
import { Col, Container, Row } from 'react-bootstrap'
import AppPageTitle from '../../components/atoms/app-page-title/AppPageTitle'
import AppHeader from '../../components/molecules/app-header/AppHeader'
import AppSimplePage from "../../components/atoms/app-simple-page/AppSimplePage";

const AppSecondarySchoolPage = () => {
    return (
        <>
            <AppHeader
                backgroundImg={"/assets/images/Salem4.jpg"}
                heading={<>Secondary School</>}
                paragraph={<>Our students have an unmatched track record of easily transitioning from secondary school to tertiary Institutions on their first attempt, due to the robust, quality education and preparation they receive at Salem Secondary School.</>}
                showBreadcrumb={true} />
            <AppPageTitle title="Secondary School" />




            <AppSimplePage>

                <Row>

                    <Col md={12} lg={6}>
                        <p>Salem Secondary School commenced operation in September 2010 with a class of just about 10 students, since then, it has grown to be a Center of Academic Excellence. Our curriculum is a rich blend that challenges learners to brace up to traditional rudiments of the scholarly world such as reading, writing, listening, reasoning and research. It also adopts global perspectives that develops learners’ ability to think critically, analytically, systematically and creatively. We teach in accordance to the National Policy of Education (2014) which provides among others, for three years of Upper Basic Education (JSS 1-3) with broad-based career-specific subjects consolidated by categories and three years of Senior Secondary Education that culminates in Senior School Certificate Examination (SSCE), Unified Tertiary Matriculation Examination (UTME), Post-UTME and subsequent admission into tertiary institutions. Our students have been writing Basic Education Certificate Examinations (BECEs) with pass rates in the range of 90 – 100%. The same feat has been recorded with the Senior Secondary Certificate Examinations (SSCEs). </p>
                        <p>Learning at Salem secondary school takes place in a world-class facility that houses classrooms, laboratories, a state-of-the-art ICT center, an interactive library, and student-teacher learning resources. </p></Col>

                    <Col md={12} lg={6}>

                        <p>Our students have an unmatched track record of easily transitioning from secondary school to tertiary Institutions on their first attempt, due to the robust, quality education and preparation they receive at Salem Secondary School. </p>


                        <p>Characteristic of our students at Salem Academy is not just their usual involvement with their peers in interschool quiz competition, but their record of always being among the high-flyers as seen in our recent feats at the Mathematics competition organized by The Nigerian Society of Engineers and a competition on desertification organized by the Federal Ministry of Environment in June 2021, where our SS2 students came 2nd.</p>


                        <p>As a way of arousing and sustaining academic excellence, Salem Secondary School has recently instituted the committee on Excellence, a committee strictly saddled with the responsibility of ensuring competitive academic achievements first within the school, among the various classes, and then over their peers from other schools.</p>


                        <p>The school is firm on it’s stance to instill and imbibe both academic and moral discipline in our students as we have zero tolerance for violation of sensitive school regulations. </p>
                    </Col>
                </Row>






                <h3>  Our Curriculum</h3>


                <Row>
                    <Col md={6}>
                        <h4>   Junior Secondary School</h4>

                        <ul>
                            <li><i className="fas fa-check-double"></i> &nbsp;English Studies</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Mathematics</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Basic Science Education</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Physical & Health Education</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Basic Technology</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Social Studies</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Business Studies</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Computer Studies</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Agricultural Science</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Home Economics</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Hausa Language</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Civic & Security Education</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;French Language</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Christian Religious Studies</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Islamic Studies</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Cultural & Creative Art</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Music</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;History</li>
                        </ul>


                    </Col>
                    <Col md={6}>

                        <h4>Senior Secondary School</h4>
                        <ul>   <li><i className="fas fa-check-double"></i> &nbsp;English Studies</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;General Mathematics</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Civic Education</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Catering Craft Practice</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Data Processing</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Economics</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Physics</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Chemistry</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Biology</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Government</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Christian Religious Knowledge</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Islamic Studies</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Literature in English</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Commerce</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Financial Accounting</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Office Practice</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Technical Drawing</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Geography</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Computer Studies</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Agricultural Science</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Foods & Nutrition</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Further Mathematics</li>
                            <li><i className="fas fa-check-double"></i> &nbsp;Visual Art</li>
                        </ul>
                    </Col>
                </Row>




                <p>  Our curriculum adopts a multi-faceted approach to learning that is active, and child centered. We strive to equip our students with the skills required to cope with the real world by creating a chain of values. Excellence we believe is a function of sound intellectual development and attainment of high standards of character. Our students are groomed to be global citizens who have high value for life, value for the rights of others, value for the environment and value for the planet on which they live. Learners are also exposed to life skills such as human relations, survival skills, entrepreneurial skills, and financial literacy. All these are made possible through the inclusion of a carefully thought-out co-curriculum programme that offers a wide variety of club membership.
                </p>
                <h3>Our clubs</h3>
                <ul>

                    <li><i className="fas fa-check-double"></i> &nbsp;Entrepreneurship/HomeMakers Club</li>
                    <li><i className="fas fa-check-double"></i> &nbsp;Junior Engineers, Technicians & Scientists (JETS) Club</li>
                    <li><i className="fas fa-check-double"></i> &nbsp;History, Plurality & Current Affairs Club</li>
                    <li><i className="fas fa-check-double"></i> &nbsp;Literary & Debating Club</li>
                    <li><i className="fas fa-check-double"></i> &nbsp;French Club</li>
                    <li><i className="fas fa-check-double"></i> &nbsp;Music Club</li>
                    <li><i className="fas fa-check-double"></i> &nbsp;Taekwondo Club</li>
                    <li><i className="fas fa-check-double"></i> &nbsp;Arts Club</li>
                    <li><i className="fas fa-check-double"></i> &nbsp;Young Farmers Club</li>
                    <li><i className="fas fa-check-double"></i> &nbsp;Road Safety Club</li>
                </ul>


                <h3> Teachers and Academic Staff</h3>

                <p>  Our teams of teaching staff are trained in the art of pedagogy. Possession of the national teaching qualification is a prerequisite for being employed. Mandatory Continuous Professional Development is encouraged among the teaching staff who are expected to be registered with Teachers Registration Council of Nigeria (TRCN). Compliance with the Child Right Act has also necessitated the training of teachers of the School to become certified child educators with capacity to function as advocates for the rights of the Nigerian Child. We emphasize teamwork because our strength is in our unity! The School promotes Staff-Student relationships that are directed at improving the knowledge transfer process and guaranteeing a healthy and sustainable social community.</p>


            </AppSimplePage>
        </>
    )
}

export default AppSecondarySchoolPage
