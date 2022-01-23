import { Button, Drawer, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AppHamburger from '../../atoms/app-hamburger/AppHamburger';
//import 'antd/dist/antd.css';
import AppNavItem from '../../atoms/app-nav-item/AppNavItem';
import "./AppMenu.css"
import { isMobile } from 'react-device-detect';

const AppMenu = () => {
    const initialState = { visible: false, width: 450, childrenDrawer: false }
    const [state, setState] = useState(initialState);
    const [childDrawerItem, setChildDrawerItem] = useState("");



    const toggleDrawer = (opened: boolean) => {
        setState({
            ...state,
            visible: opened,
        });
    };

    const onClose = () => {
        setState({
            ...state,
            visible: false,

        });
    };

    const showChildrenDrawer = (item: any) => {
        setState({
            ...state,
            childrenDrawer: true,
            width: state.childrenDrawer ? state.width : state.width * 2
        });
        setChildDrawerItem(item)
    };

    const onChildrenDrawerClose = () => {
        setState({
            ...state,
            childrenDrawer: false,
            width: initialState.width
        });
    };

    const closeMain = (ev: any) => {

        console.log(ev)
        toggleDrawer(false);
    }
    return (
        <>

            <AppHamburger handleClick={(state: boolean) => toggleDrawer(state)} />
            <Drawer placement='left'
                width={state.width}
                closable={true}
                onClose={onClose}
                visible={state.visible}
                contentWrapperStyle={{ clipPath: "polygon(0 0, 100% 0, 76% 100%, 0% 100%)", height: "100vh", position: "fixed" }}
                bodyStyle={{ left: state.childrenDrawer ? state.width / 2 : 0, position: state.childrenDrawer ? "absolute" : "relative", border: 0, padding: 0, backgroundColor: "var(--primary)", overflow: "hidden", width: "100%" }}
                headerStyle={{ backgroundColor: "var(--primary)" }}
                drawerStyle={{ backgroundColor: "var(--primary)" }}
                closeIcon={<span className="close_btn">&times;</span>}
                footer={<>
                    {/* <Link to="#" className='social'><i className="fab fa-twitter"></i></Link> */}
                    <a rel="noreferrer" target="_blank" href="https://web.facebook.com/SalemAcademyLugbeAbuja" className='social'><i className="fab fa-facebook"></i></a>
                    <a rel="noreferrer" href="https://www.instagram.com/salemacademylugbeabuja" target="_blank" className='social'><i className="fab fa-instagram"></i></a>
                    <a rel="noreferrer" href="https://www.linkedin.com/company/salem-academy-abuja" target="_blank" className='social'><i className="fab fa-linkedin-in"></i></a>
                </>}

                footerStyle={{ display: "flex", paddingBottom: "20px" }}
                className="app-menu menu1"
            >
                <br />
                <ul>
                    <AppNavItem linkText="Home" onClick={toggleDrawer} to="/" />
                    <AppNavItem linkText="About Salem Academy" onClick={toggleDrawer} to="about" />
                    <AppNavItem linkText="Events" onClick={toggleDrawer} to="events" />
                    <AppNavItem linkText="Admission Information" onClick={toggleDrawer} to="admissions" />
                    <AppNavItem linkText="Our Schools" onClick={showChildrenDrawer} >
                        <AppNavItem linkText="Secondary" onClick={toggleDrawer} to="secondary-school" />
                        <AppNavItem linkText="Primary" onClick={toggleDrawer} to="primary-school" />
                        <AppNavItem linkText="Nursery" onClick={toggleDrawer} to="nursery-school" />
                        <AppNavItem linkText="Busy Baby Crèche" onClick={toggleDrawer} to="creche-school" />
                    </AppNavItem>
                    <AppNavItem linkText="News" onClick={toggleDrawer} to="news" />

                    <AppNavItem linkText="Gallery" onClick={toggleDrawer} to="gallery" />
                    <AppNavItem linkText="Contact Us" onClick={toggleDrawer} to="contact" />
                </ul>

            </Drawer>

            <Drawer

                placement='left'
                width={450}
                closable={true}
                onClose={onChildrenDrawerClose}
                visible={state.childrenDrawer}
                contentWrapperStyle={{ clipPath: "polygon(0 0, 100% 0, 76% 100%, 0% 100%)" }}
                bodyStyle={{ backgroundColor: "var(--green-grey)", padding: 0 }}
                headerStyle={{ backgroundColor: "var(--green-grey)" }}
                closeIcon={<span className="close_btn">&times;</span>}
                className="app-menu menu2"
            >
                <br />
                {childDrawerItem}
            </Drawer>
        </>
    )
}

export default AppMenu
