
import AppBreadcrumb from "../app-breadcrumb/AppBreadcrumb"
import "./AppHeader.css"
const AppHeader = ({ heading, paragraph, backgroundImg, showBreadcrumb }: any) => {
    return (
        <><div className="wgs-header-strip__banner-overlay  wgs-header-strip__banner-overlay-BLACK"> </div>

            <header style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${backgroundImg})` }} id="app-header">
                <div className="header-full-overlay"></div>
                <div className="app-logo">
                    <img width="100%" src="./assets/images/salem-logo.png" alt="salem academy" />
                    <span>Salem Academy</span>
                </div>
                <div className="heading-wrapper">


                    <div className="heading-texts">
                        <h1>{heading}</h1>
                        <p>{paragraph}</p>
                        <div className="mouse_scroll">

                            <div className="mouse">
                                <div className="wheel"></div>
                            </div>
                            <div>
                                <span className="m_scroll_arrows unu"></span>
                                <span className="m_scroll_arrows doi"></span>
                                <span className="m_scroll_arrows trei"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            {showBreadcrumb ? <AppBreadcrumb /> : <></>}
        </>
    )
}

export default AppHeader
