

import { Route, Routes } from 'react-router-dom'
import App404Page from '../pages/404/App404Page'
import AppAboutPage from '../pages/about/AppAboutPage'
import AppContactPage from '../pages/contact/AppContactPage'
import AppGalleryPage from '../pages/gallery/AppGalleryPage'
import AppHomePage from '../pages/home/AppHomePage'

const AppRouter = () => {
    return (

        <Routes>
            <Route path="/" element={<AppHomePage />} />
            <Route path="about" element={<AppAboutPage />} />
            <Route path="/gallery" element={<AppGalleryPage />} />
            <Route path="/contact" element={<AppContactPage />} />
            <Route path="*" element={<App404Page />} />
        </Routes>

    )
}

export default AppRouter
