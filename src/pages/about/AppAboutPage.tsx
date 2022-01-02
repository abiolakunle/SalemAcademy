import React from 'react'
import AppPageTitle from '../../components/atoms/app-page-title/AppPageTitle'
import AppHeader from '../../components/molecules/app-header/AppHeader'

const AppAboutPage = () => {
    return (
        <>
            <AppHeader
                backgroundImg={"./assets/images/home-header-banner.webp"}
                heading={<>About Salem Academy</>}
                paragraph={<>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, est ab. Blanditiis ullam, eaque cumque magni molestias, quas accusantium quasi consequuntur possimus, deleniti ipsam veritatis excepturi reiciendis optio iusto dolorem!</>}
                showBreadcrumb={true} />
            <AppPageTitle title="About Salem Academy" />
        </>
    )
}

export default AppAboutPage
