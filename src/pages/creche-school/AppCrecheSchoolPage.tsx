import React from 'react'
import AppPageTitle from '../../components/atoms/app-page-title/AppPageTitle'
import AppSimplePage from '../../components/atoms/app-simple-page/AppSimplePage'
import AppHeader from '../../components/molecules/app-header/AppHeader'

const AppCrecheSchoolPage = () => {
    return (<>
        <AppHeader
            backgroundImg={"/assets/images/fine_art.jfif"}
            heading={<>Salem Busy Baby Crèche</>}
            paragraph={<>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, est ab. Blanditiis ullam, eaque cumque magni molestias, quas accusantium quasi consequuntur possimus, deleniti ipsam veritatis excepturi reiciendis optio iusto dolorem!</>}
            showBreadcrumb={true} />
        <AppPageTitle title="Salem Busy Baby Crèche" />

        <AppSimplePage>
            <p>At Salem Busy Babies Creche, we offer excellence in infant baby day care. Our babies are always busy as our name implies, all the children in our care engage in activities that aid their mental and all round development. From birth to age 5, a child’s brain develops more than at any other time in life. And early brain development has a lasting impact on a child’s ability to learn and succeed in school and life. We ensure that our children develop brain connections through their everyday experiences and interactions.  </p>

            <p>Extraordinary planning and design underlie our learning environment. Whether it is the serene and conducive learning domain, the bright and spacious feel of our classroom, the multiple age-appropriate outdoor play areas, or the strategically positioned close circuit camera, it is all designed to achieve one goal to offer your child the most exciting, engaging  and secure learning environment possible. We believe that every child is special, and we treat them as such. We ensure each child is paid attention to and that they feel comfortable and are completely at ease. </p>

            <p>We are adequately staffed with fifteen child minders who are eager to nurture and care for your child, an in-house nurse, and friendly security staff. All our staff undergo vigorous security and health screening and are frequently trained to ensure they give each child the best care.</p>


            <p>The crèche admits babies from 6 weeks old to 2 years. However, each age group is split into different groups to ensure that they are extremely comfortable. </p>

            <p>We open Monday to Fridays (excluding public holidays). Activities resume in the crèche by 7am and we close by 6pm.</p>

            <h3>Our Facility is Equipped with  </h3>
            <ul>
                <li><i className="fas fa-check-double"></i> &nbsp; A Stand-by Generator</li>
                <li><i className="fas fa-check-double"></i> &nbsp;Padded floors (open space)</li>
                <li><i className="fas fa-check-double"></i> &nbsp;Air conditioning</li>
                <li><i className="fas fa-check-double"></i> &nbsp;Spacious rooms</li>
                <li><i className="fas fa-check-double"></i> &nbsp;Educational toys</li>
                <li><i className="fas fa-check-double"></i> &nbsp;Audio-visual resources</li>
                <li><i className="fas fa-check-double"></i> &nbsp;CCTV camera</li>
                <li><i className="fas fa-check-double"></i> &nbsp;Indoor and outdoor activity toys.</li>
                <li><i className="fas fa-check-double"></i> &nbsp;Well equipped kitchen</li>
                <li><i className="fas fa-check-double"></i> &nbsp;Nap rooms</li>
                <li><i className="fas fa-check-double"></i> &nbsp;24/7 running water </li>
            </ul>

            <h3> Our Children Engage in the Following Activities  </h3>
            <ul>
                <li><i className="fas fa-check-double"></i> &nbsp;
                    Identification and counting of numbers.
                </li>
                <li><i className="fas fa-check-double"></i> &nbsp;Identification and recitation of the alphabets</li>
                <li><i className="fas fa-check-double"></i> &nbsp;Coloring and scribbling</li>
                <li><i className="fas fa-check-double"></i> &nbsp;Identification of colors and shapes</li>
                <li><i className="fas fa-check-double"></i> &nbsp;Sand tray activities</li>
                <li><i className="fas fa-check-double"></i> &nbsp;Music moments</li>
                <li><i className="fas fa-check-double"></i> &nbsp;Nap time</li>
                <li><i className="fas fa-check-double"></i> &nbsp;Potty training</li>
                <li><i className="fas fa-check-double"></i> &nbsp;Outdoor play sessions</li>
                <li><i className="fas fa-check-double"></i> &nbsp;Alphabet Exercise</li>
                <li><i className="fas fa-check-double"></i> &nbsp;Personal hygiene education (washing of hands after using the potty)</li>
            </ul>
            <br />
            <p>We believe that when you “free the child’s potential, you will transform them into the world”.</p>
        </AppSimplePage>
    </>

    )
}

export default AppCrecheSchoolPage
