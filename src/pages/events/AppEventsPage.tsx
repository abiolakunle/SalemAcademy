import AppPageTitle from "../../components/atoms/app-page-title/AppPageTitle"
import AppHeader from "../../components/molecules/app-header/AppHeader"
import "./AppEventsPage.css"

import eventItems from "../../data/events";


const AppEventsPage = () => {


    return (



        <>
            <AppHeader
                backgroundImg={"./assets/images/home_econs.jfif"}
                heading={<>Events</>}
                paragraph={<>The all-round, inclusive education on offer at Salem Academy has always been a core component of our values , and it is focused on bringing out the very best in every pupil. We are looking forward to developing this even further over the coming years.</>}
                showBreadcrumb={true} />
            <AppPageTitle title="Events" />

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {

                            eventItems.map(l => (<>

                                <div className="main-timeline">
                                    <div className="timeline">
                                        <a href="#" className="timeline-content">
                                            <div className="timeline-icon"><i className="fas fa-calendar-alt"></i></div>
                                            <div className="timeline-year"> {l.left.date.getDate()} {l.left.date.toLocaleString('default', { month: 'long' })}  {l.left.date.getFullYear()}  </div>
                                            <h3 className="title">{l.left.title}</h3>
                                            <p className="description">
                                                <br />

                                                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo */}
                                            </p>
                                        </a>
                                    </div>
                                    {
                                        !!l.right && <div className="timeline">
                                            <a href="#" className="timeline-content">
                                                <div className="timeline-icon"><i className="fas fa-calendar-alt"></i></div>
                                                <div className="timeline-year"> {l.right?.date.getDate()} {l.right?.date.toLocaleString('default', { month: 'long' })} {l.right?.date.getFullYear()}</div>
                                                <h3 className="title">{l.right?.title}</h3>
                                                <p className="description">
                                                    <br />


                                                </p>
                                            </a>
                                        </div>
                                    }
                                </div>
                            </>))
                        }
                        {/* <div className="main-timeline">
                            <div className="timeline">
                                <a href="#" className="timeline-content">
                                    <div className="timeline-icon"><i className="fas fa-calendar-alt"></i></div>
                                    <div className="timeline-year">15th  Dec 2022</div>
                                    <h3 className="title">Christmas Carol</h3>
                                    <p className="description">
                                        <br />
                                        <br />

                                    </p>
                                </a>
                            </div>

                            <div className="timeline">
                                <a href="#" className="timeline-content">
                                    <div className="timeline-icon"><i className="fas fa-calendar-alt"></i></div>
                                    <div className="timeline-year">2020</div>
                                    <h3 className="title">Collection of Report Cards</h3>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                                    </p>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div></>
    )
}

export default AppEventsPage
