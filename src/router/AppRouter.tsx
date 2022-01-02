

import { Route, Routes } from 'react-router-dom'
import AppAboutPage from '../pages/about/AppAboutPage'
import AppHomePage from '../pages/home/AppHomePage'

const AppRouter = () => {
    return (

        <Routes>
            <Route path="/" element={<AppHomePage />} />
            <Route path="about" element={<AppAboutPage />} />
        </Routes>

    )
}

export default AppRouter
