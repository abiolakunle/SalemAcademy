

import { Route, Routes } from 'react-router-dom'
import App404Page from '../pages/404/App404Page'
import AppAboutPage from '../pages/about/AppAboutPage'
import AppContactPage from '../pages/contact/AppContactPage'
import AppNewsPage from '../pages/news/AppNewsPage'
import AppGalleryPage from '../pages/gallery/AppGalleryPage'
import AppHomePage from '../pages/home/AppHomePage'
import AppEventsPage from '../pages/events/AppEventsPage'
import AppAdmissionPage from '../pages/admission/AppAdmissionPage'
import AppPrimarySchoolPage from '../pages/primary-school/AppPrimarySchoolPage'
import AppSecondarySchoolPage from '../pages/secondary-school/AppSecondarySchoolPage'
import AppCrecheSchoolPage from '../pages/creche-school/AppCrecheSchoolPage'
import AppNurserySchoolPage from '../pages/nursery-school/AppNurserySchoolPage'

const AppRouter = () => {
    return (

        <Routes>
            <Route path="/" element={<AppHomePage />} />
            <Route path="about" element={<AppAboutPage />} />
            <Route path="/gallery" element={<AppGalleryPage />} />
            <Route path="/contact" element={<AppContactPage />} />
            <Route path="/events" element={<AppEventsPage />} />
            <Route path="/news" element={<AppNewsPage />} />
            <Route path="/admissions" element={<AppAdmissionPage />} />
            <Route path="/primary-school" element={<AppPrimarySchoolPage />} />
            <Route path="/secondary-school" element={<AppSecondarySchoolPage />} />
            <Route path="/creche-school" element={<AppCrecheSchoolPage />} />
            <Route path="/nursery-school" element={<AppNurserySchoolPage />} />
            <Route path="*" element={<App404Page />} />
        </Routes>

    )
}

export default AppRouter
