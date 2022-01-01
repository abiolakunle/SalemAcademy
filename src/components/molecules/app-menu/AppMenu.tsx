import { Button, Drawer, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AppHamburger from '../../atoms/app-hamburger/AppHamburger';
//import 'antd/dist/antd.css';
import AppNavItem from '../../atoms/app-nav-item/AppNavItem';
import "./AppMenu.css"

const AppMenu = () => {
    const initialState = { visible: false, width: 450, childrenDrawer: false }
    const [state, setState] = useState(initialState);
    const [childDrawerItem, setChildDrawerItem] = useState("");



    const showDrawer = (opened: boolean) => {
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
    return (
        <>

            <AppHamburger handleClick={(state: boolean) => showDrawer(state)} />
            <Drawer placement='left'
                width={state.width}
                closable={true}
                onClose={onClose}
                visible={state.visible}
                contentWrapperStyle={{ clipPath: "polygon(0 0, 100% 0, 76% 100%, 0% 100%)" }}
                bodyStyle={{ left: state.childrenDrawer ? state.width / 2 : 0, position: state.childrenDrawer ? "absolute" : "relative", border: 0, padding: 0, backgroundColor: "var(--primary)", overflow: "hidden" }}
                headerStyle={{ backgroundColor: "var(--primary)" }}
                drawerStyle={{ backgroundColor: "var(--primary)" }}
                closeIcon={<span className="close_btn">&times;</span>}
                footer={<>
                    <Link to="#" className='social'><i className="fab fa-twitter"></i></Link>
                    <Link to="#" className='social'><i className="fab fa-facebook"></i></Link>
                    <Link to="#" className='social'><i className="fab fa-instagram"></i></Link></>}

                footerStyle={{ display: "flex", paddingBottom: "20px" }}
                className="app-menu"
            >
                <br />
                <ul>
                    <AppNavItem linkText="Home" />
                    <AppNavItem linkText="About Us" onClick={showChildrenDrawer}>
                        <AppNavItem linkText="Our Vision" />
                        <AppNavItem linkText="Our Mission" />
                    </AppNavItem>
                    <AppNavItem linkText="Admissions" onClick={showChildrenDrawer} >
                        <AppNavItem linkText="Nursery" />
                        <AppNavItem linkText="Primary" />
                        <AppNavItem linkText="Secondary" />
                    </AppNavItem>
                    <AppNavItem linkText="Gallery" />
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
