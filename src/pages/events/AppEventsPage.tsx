import AppPageTitle from "../../components/atoms/app-page-title/AppPageTitle"
import AppHeader from "../../components/molecules/app-header/AppHeader"
import "./AppEventsPage.css"

const AppEventsPage = () => {
    return (
        <>
            <AppHeader
                backgroundImg={"./assets/images/home_econs.jfif"}
                heading={<>Events</>}
                paragraph={<>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, est ab. Blanditiis ullam, eaque cumque magni molestias, quas accusantium quasi consequuntur possimus, deleniti ipsam veritatis excepturi reiciendis optio iusto dolorem!</>}
                showBreadcrumb={true} />
            <AppPageTitle title="Events" />

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-timeline">
                            <div className="timeline">
                                <a href="#" className="timeline-content">
                                    <div className="timeline-icon"><i className="fas fa-calendar-alt"></i></div>
                                    <div className="timeline-year">2021</div>
                                    <h3 className="title">Collection of Report Cards</h3>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                                    </p>
                                </a>
                            </div>
                            <div className="timeline">
                                <a href="#" className="timeline-content">
                                    <div className="timeline-icon"><i className="fas fa-calendar-alt"></i></div>
                                    <div className="timeline-year">2020</div>
                                    <h3 className="title">Primary Open Day</h3>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="main-timeline">
                            <div className="timeline">
                                <a href="#" className="timeline-content">
                                    <div className="timeline-icon"><i className="fas fa-calendar-alt"></i></div>
                                    <div className="timeline-year">2021</div>
                                    <h3 className="title">Second Term Examination</h3>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
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
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default AppEventsPage
