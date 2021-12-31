
import "./AppHeader.css"
const AppHeader = ({ backgroundImg }: any) => {
    return (
        <><div className="wgs-header-strip__banner-overlay  wgs-header-strip__banner-overlay-BLACK"> </div>
            <header style={{ backgroundImage: `url(${backgroundImg})` }} id="app-header">
                <div className="heading-wrapper">
                    <div className="heading-texts">
                        <h1>Welcome</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe repellendus, doloremque non ullam quasi nisi facere. Quos consequatur debitis rem aut recusandae tempore, quia sapiente, eum quasi delectus repellendus corporis.</p>


                    </div>
                </div>
            </header>
        </>
    )
}

export default AppHeader
