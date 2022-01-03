import { useEffect } from "react";
import Particles from 'react-tsparticles'
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

        <>
            <section className="app-parallax-section" style={{ backgroundColor }}>
                <Particles
                    id="tsparticles"
                    canvasClassName="particles-canvas"
                    options={{
                        background: {
                            color: {
                                value: "var(--dark-blue-1)",
                            },
                        },
                        fpsLimit: 1000,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                        },
                        detectRetina: true,
                    }}
                />
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
                        </div>
                    </div>


                </div>
            </section>
        </>

    )
}

export default AppFixedParallaxSection
