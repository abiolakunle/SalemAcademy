import { Col, Container, Row } from "react-bootstrap"
import AppPageTitle from "../../components/atoms/app-page-title/AppPageTitle"
import AppSimplePage from "../../components/atoms/app-simple-page/AppSimplePage"
import AppHeader from "../../components/molecules/app-header/AppHeader"
import "./AppPrimarySchoolPage.css"

const AppPrimarySchoolPage = () => {
    return (
        <>
            <AppHeader
                backgroundImg={"/assets/images/Salem11.jpg"}
                heading={<>Primary School</>}
                paragraph={<>We help students prepare for life in senior school. We encourage positive traits such as excellence, respect, discipline, Faith and integrity. We use our unique curriculum to give children a strong foundation for learning and living.</>}
                showBreadcrumb={true} />
            <AppPageTitle title="Primary School" />

            <Container className='app-primary-sch'>
                <Row>
                    <Col md={12} lg={6}>  <p>At Salem Primary School we believe in helping children develop their social, mental, and educational wellbeing by promoting excellent all round learning in a very friendly and serene environment geared towards building strong minds, with great hearts and true character accompanied with personal initiatives and enthusiasm.</p>

                        <p>Our dedicated team, amazing facilities, and focused learning pathways set clear goals for our students and allow them to grow into happy, independent students. </p>
                    </Col>
                    <Col md={12} lg={6}>
                        <p>Students at our primary school benefit from our compact class sizes which allow our team to understand each child’s individual needs and tailor their learning experience. Everyone from the Head Teacher to teaching staffs and assistant work together to create a close-knit atmosphere where children feel comfortable expressing themselves.</p>


                        <p>We help students prepare for life in senior school. We encourage positive traits such as excellence, respect, discipline, Faith and integrity. We use our unique curriculum to give children a strong foundation for learning and living.</p>


                    </Col>
                </Row>




                <AppSimplePage fluid>
                    <h3>We Promote</h3>

                    <ul className="text-left">
                        <li><i className="fas fa-check-double"></i> &nbsp;
                            High standards in all subjects, particularly Mathematics, English and Sciences.
                        </li>
                        <li><i className="fas fa-check-double"></i> &nbsp;

                            Position and cordial relationships amongst all pupils.
                        </li>
                        <li><i className="fas fa-check-double"></i> &nbsp;
                            Great opportunities to learn and to take initiatives.
                        </li>
                        <li><i className="fas fa-check-double"></i> &nbsp;
                            Good behavioral and additional traits in the children.
                        </li>
                        <li><i className="fas fa-check-double"></i> &nbsp;

                            Excellent relationships between the staff and children.
                        </li>
                        <li><i className="fas fa-check-double"></i> &nbsp;
                            Excellent provision for social development and very good provision for personal development and taking responsibilities at every stage of their growth process.
                        </li>

                    </ul>
                </AppSimplePage>

                <br />
                <br />

            </Container>


        </>

    )
}

export default AppPrimarySchoolPage
