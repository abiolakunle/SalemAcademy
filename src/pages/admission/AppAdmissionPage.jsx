import React from 'react'
import AppPageTitle from '../../components/atoms/app-page-title/AppPageTitle'
import AppHeader from '../../components/molecules/app-header/AppHeader'

import "./AppAdmissionPage.css"

const AppAdmissionPage = () => {
    return (
        <>
            <AppHeader
                backgroundImg={"./assets/images/salem-academy-view.webp"}
                heading={<>Admission Information</>}
                paragraph={<>Our students feel happy and valued, which gives them the confidence and enthusiasm for life-long learning, needed to succeed in a fast changing world.</>}
                showBreadcrumb={true} />
            <AppPageTitle title="Admission Information" />

            <div class="app-admission">
                <div class="container">

                    <div style={{ position: "relative" }} class="row align-items-center how-it-works d-flex">
                        <div style={{ position: "relative" }} class="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                            <div class="circle font-weight-bold">1</div>
                        </div>
                        <div class="col-6 col-sm-8 left-item">
                            <h5>Purchase the Admission Form</h5>
                            <p>The first step is to purchase an admission form, fill in the information, and return it to the school. To do this, You can visit the school premises to purchase a form at the reception or school accounts office.</p>
                            <ul>
                                <li>  Nursery Forms  <span class="tag"> &#8358;5,000</span>

                                </li>
                                <li>
                                    Primary Forms  <span class="tag"> &#8358;5,000</span>
                                </li>
                                <li>
                                    Secondary Forms <span class="tag">&#8358;10,000 </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="row timeline">
                        <div class="col-2">
                            <div class="corner top-right"></div>
                        </div>
                        <div class="col-8">
                            <hr />
                        </div>
                        <div class="col-2">
                            <div class="corner left-bottom"></div>
                        </div>
                    </div>

                    <div style={{ position: "relative" }} class="row align-items-center justify-content-end how-it-works d-flex">
                        <div class="col-6  right-item">
                            <h5 >Take the Entrance Examination</h5>
                            <p>All through the year, we have dedicated days set aside for entrance examinations into the school. Our website is updated regularly with the dates for the exams, you can also visit the school, or contact us</p>
                        </div>
                        <div style={{ position: "relative" }} class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                            <div class="circle font-weight-bold">2</div>
                        </div>
                    </div>

                    <div class="row timeline">
                        <div class="col-2">
                            <div class="corner right-bottom"></div>
                        </div>
                        <div class="col-8">
                            <hr />
                        </div>
                        <div class="col-2">
                            <div class="corner top-left"></div>
                        </div>
                    </div>

                    <div style={{ position: "relative" }} class="row align-items-center how-it-works d-flex">
                        <div style={{ position: "relative" }} class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                            <div class="circle font-weight-bold">3</div>
                        </div>
                        <div class="col-6  left-item">
                            <h5>Enrollment</h5>
                            <p>If you are successful in the examination, you will be notified (Kindly note that if a child fails we cannot admit them into the school, in special cases the child might be recommended for a lower class grade). We will then give you all the required documentation for the school enrolment procedures. Upon payment of all school fees (Including uniform and books), your child can resume at the school.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppAdmissionPage
