import { Col, Container, Row } from "react-bootstrap"
import AppPageTitle from "../../components/atoms/app-page-title/AppPageTitle"
import AppSimplePage from "../../components/atoms/app-simple-page/AppSimplePage"
import AppHeader from "../../components/molecules/app-header/AppHeader"
import "./AppPrimarySchoolPage.css"

const AppPrimarySchoolPage = () => {
    return (
        <>
            <AppHeader
                backgroundImg={"/assets/images/fine_art.jfif"}
                heading={<>Primary School</>}
                paragraph={<>We help students prepare for life in senior school. We encourage positive traits such as excellence, respect, discipline, Faith and integrity. We use our unique curriculum to give children a strong foundation for learning and living.</>}
                showBreadcrumb={true} />
            <AppPageTitle title="Primary School" />

            <Container className='app-primary-sch'>
                <Row>
                    <Col>  <p>At Salem Primary School we believe in helping children develop their social, mental, and educational wellbeing by promoting excellent all round learning in a very friendly and serene environment geared towards building strong minds, with great hearts and true character accompanied with personal initiatives and enthusiasm.</p>

                        <p>Our dedicated team, amazing facilities, and focused learning pathways set clear goals for our students and allow them to grow into happy, independent students. </p>
                    </Col>
                    <Col>
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
                <div className="accordion-wrapper">
                    <div className="accordion">
                        <input type="radio" name="radio-a" id="check1" />
                        <label className="accordion-label" htmlFor="check1">SCHOOL HOURS</label>
                        <div className="accordion-content">
                            The school opens at 7:30 am, <br />

                            Lessons commence at : 8:15am to 2:00pm 	 <br />

                            Monday - Thursday 	<br />

                            8:15am to 12:15pm 	<br />

                            every Friday <br />

                            After school lessons (optional for Lower Basic 1-3) commences at 2:30pm-3:30pm Monday-Wednesday
                        </div>
                    </div>
                    <div className="accordion">
                        <input type="radio" name="radio-a" id="check2" />
                        <label className="accordion-label" htmlFor="check2">ACCREDITATION/CERTIFICATION</label>
                        <div className="accordion-content">
                            <p>We had our first accreditation in the year 2013 by the F.C.T department of Policy Implementation now known as Department of Quality Assurance and we are a certified school as a <b>Child Protection School & Case Management</b> under the <b>Child's Right Act 2003</b>.</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <input type="radio" name="radio-a" id="check3" />
                        <label className="accordion-label" htmlFor="check3">TEACHERS</label>
                        <div className="accordion-content">
                            <p>We have trained and experienced teachers who are certified under the Teachers Registration Council of Nigeria (TRCN), child Protection School & Case Management based teachers, well-motivated, dynamic,trendy, energic, creative, innovative, and have mastery of their teaching subjects and objects with a range of qualifications from N.C.E, B.Ed, B.Sc/HND with PGDE, M.Ed and Ph.D </p>
                        </div>
                    </div>
                    <div className="accordion">
                        <input type="radio" name="radio-a" id="check4" />
                        <label className="accordion-label" htmlFor="check4">CURRICULUM</label>
                        <div className="accordion-content">
                            <b>   The school organizes intra and inter class/school quiz and debates competition and observe the following subjects
                            </b>

                            <ul className="text-left">
                                <li><i className="fas fa-check-double"></i> &nbsp;
                                    Mathematics
                                </li>
                                <li><i className="fas fa-check-double"></i> &nbsp;

                                    English Studies (Grammar, Comprehension, Composition, Phonics, Reading and Dictation)
                                </li>
                                <li><i className="fas fa-check-double"></i> &nbsp;
                                    Basic Science and Technology
                                </li>
                                <li><i className="fas fa-check-double"></i> &nbsp;
                                    Pre-Vocational Studies (Agricultural Science and Home Economics)
                                </li>
                                <li><i className="fas fa-check-double"></i> &nbsp;

                                    Religion
                                </li>


                                <li><i className="fas fa-check-double"></i> &nbsp;
                                    National Value
                                </li>



                                <li><i className="fas fa-check-double"></i> &nbsp;
                                    Creative and Cultural Arts
                                </li>
                                <li><i className="fas fa-check-double"></i> &nbsp;
                                    Computer Studies
                                </li>
                                <li><i className="fas fa-check-double"></i> &nbsp;
                                    French
                                </li>
                                <li><i className="fas fa-check-double"></i> &nbsp;
                                    Quantitative Reasoning
                                </li>
                                <li><i className="fas fa-check-double"></i> &nbsp;


                                    Verbal Reasoning and

                                </li>
                                <li><i className="fas fa-check-double"></i> &nbsp;
                                    History
                                </li>

                            </ul>

                        </div>
                    </div>
                    <div className="accordion">
                        <input type="radio" name="radio-a" id="check5" />
                        <label className="accordion-label" htmlFor="check5">CO-CURRICULAR ACTIVITIES/EXCURSION AND TRIPS</label>
                        <div className="accordion-content">

                            <b>  List of clubs</b>
                            <ul>
                                <li><i className="fas fa-check-double"></i> &nbsp;  Home makers club</li>
                                <li><i className="fas fa-check-double"></i> &nbsp;  Drama club</li>
                                <li><i className="fas fa-check-double"></i> &nbsp;  Writers club</li>
                                <li><i className="fas fa-check-double"></i> &nbsp;  Arts and Crafts club</li>
                                <li><i className="fas fa-check-double"></i> &nbsp;  Music club</li>
                                <li><i className="fas fa-check-double"></i> &nbsp;  Science and Conservation club</li>
                                <li><i className="fas fa-check-double"></i> &nbsp;  Red Cross club</li>
                                <li><i className="fas fa-check-double"></i> &nbsp;  Chess and Scrabble club</li>
                                <li><i className="fas fa-check-double"></i> &nbsp;  Ballet club and</li>
                                <li><i className="fas fa-check-double"></i> &nbsp;  Teakwando club</li>
                            </ul>
                            <i>  All clubs meet every friday by 10:30am to 12:00pm</i>
                            <br />
                            <br />

                            <b>   Excursions/ School Trips</b>
                            <br />
                            This include:

                            <ul>
                                <li><i className="fas fa-check-double"></i> &nbsp;    Excursion to the Lagos State House</li>
                                <li><i className="fas fa-check-double"></i> &nbsp;    Nigerian French Language Village Badagry.</li>
                                <li><i className="fas fa-check-double"></i> &nbsp;  Slave colony and other landmark for two days.</li>
                            </ul>


                            Field trips were undertaken at the following location.

                            <ul>
                                <li><i className="fas fa-check-double"></i> &nbsp;  National Park Headquaters Airport road-Abuja.</li>
                                <li><i className="fas fa-check-double"></i> &nbsp;  National Park and Zoo Asokoro-Abuja, Radio House Abuja.</li>
                                <li><i className="fas fa-check-double"></i> &nbsp;   National Council for Arts and Culture Abuja.</li>
                                <li><i className="fas fa-check-double"></i> &nbsp;   International Institute of Tropical Agriculture (IITA)</li>
                                <li><i className="fas fa-check-double"></i> &nbsp;   Federal Fire Service Headquaters Abuja</li>
                                <li><i className="fas fa-check-double"></i> &nbsp;  Federal Road Safety Commission Headquaters Abuja</li>
                                <li><i className="fas fa-check-double"></i> &nbsp;  Obasanjo Space Center, Abuja.</li>
                            </ul>


                        </div>
                    </div>

                    <div className="accordion">
                        <input type="radio" name="radio-a" id="check6" />
                        <label className="accordion-label" htmlFor="check6">FACILITIES</label>
                        <div className="accordion-content">
                            <p>We have a state of the art serene physical learning enviroment that enhances social and academic activities in all ramifications. Our Computer and other laboratory are well equiped to meet present demand in a more challenging and dynamic enviroment.</p>
                        </div>
                    </div>

                    <div className="accordion">
                        <input type="radio" name="radio-a" id="check7" />
                        <label className="accordion-label" htmlFor="check7">ACHIEVEMENTS</label>
                        <div className="accordion-content">
                            <p>We have a track record of academic excellence in both internal and external examinations and competitions. The Top Five outstanding performance at the 2019 National common Entrance Examination had a Salem Pupil among who had a total score of 176 out of 200.</p>
                        </div>
                    </div>

                    <div className="accordion">
                        <input type="radio" name="radio-a" id="check8" />
                        <label className="accordion-label" htmlFor="check8">TRANSPORTATION</label>
                        <div className="accordion-content">
                            <p>Distance is not an excuse to be in Salem Academy, we have an efficient transport service that can bring your child/ward from any part of the city to be part of excellence. You can be sure of nothing less than the best with us as we are second to none.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>

    )
}

export default AppPrimarySchoolPage
