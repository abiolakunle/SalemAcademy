import { useEffect } from 'react'
import AppFooter from '../components/atoms/app-footer/AppFooter'
import AppSubFooter from '../components/atoms/app-sub-footer/AppSubFooter'
import AppMenu from '../components/molecules/app-menu/AppMenu'
import AppRouter from './AppRouter'


const useScript = (url: string) => {
    useEffect(() => {
        const script = document.createElement("script")

        script.src = url
        script.async = true

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [url])
}


const AppLayout = () => {

    //useScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")

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
