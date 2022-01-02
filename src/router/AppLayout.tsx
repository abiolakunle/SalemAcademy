import AppFooter from '../components/atoms/app-footer/AppFooter'
import AppSubFooter from '../components/atoms/app-sub-footer/AppSubFooter'
import AppMenu from '../components/molecules/app-menu/AppMenu'
import AppRouter from './AppRouter'

const AppLayout = () => {
    return (
        <>
            <AppMenu />
            <AppRouter />
            <AppFooter />
            <AppSubFooter />
        </>
    )
}

export default AppLayout
