import { useEffect } from "react";
import "./AppFixedParallaxSection.css"

const AppFixedParallaxSection = ({ backgroundColor, contentPosition, children }: any) => {

    useEffect(() => {
        window.onscroll = function () {
            var scroll = window.scrollY || window.scrollTo({
                top: 0
            }) || document.getElementsByTagName("html")[0].scrollTop;
            document.documentElement.style.setProperty('--scroll-var', scroll + "px");
        }
    }, [])

    return (
        <section className="app-parallax-section" style={{ backgroundColor }}>
            <div className="content" style={{ top: `calc((${contentPosition} * 100vh) + var(--scroll-var))` }} >
                <div className="copy">
                    {children}
                    <div className="mouse_scroll">

                        <div className="mouse">
                            <div className="wheel"></div>
                        </div>
                        <div>
                            <span className="m_scroll_arrows unu"></span>
                            <span className="m_scroll_arrows doi"></span>
                            <span className="m_scroll_arrows trei"></span>
                        </div>
                    </div> </div>


            </div>
        </section>
    )
}

export default AppFixedParallaxSection
