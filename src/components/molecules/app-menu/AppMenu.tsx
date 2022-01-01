import { Button, Drawer, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import AppHamburger from '../../atoms/app-hamburger/AppHamburger';
import 'antd/dist/antd.css';
import AppNavItem from '../../atoms/app-nav-item/AppNavItem';
import "./AppMenu.css"

const AppMenu = () => {
    const initialState = { visible: false, width: 450, childrenDrawer: false }
    const [state, setState] = useState(initialState);



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

    const showChildrenDrawer = () => {
        setState({
            ...state,
            childrenDrawer: true,
            width: state.width * 2
        });
    };

    const onChildrenDrawerClose = () => {
        setState({
            ...state,
            childrenDrawer: false,
            width: initialState.width
        });
    };
    return (
        <div>

            <AppHamburger handleClick={(state: boolean) => showDrawer(state)} />
            <Drawer placement='left'
                width={state.width}
                closable={true}
                onClose={onClose}
                visible={state.visible}
                contentWrapperStyle={{ clipPath: "polygon(0 0, 100% 0, 76% 100%, 0% 100%)" }}
                bodyStyle={{ left: state.childrenDrawer ? state.width / 2 : 0, position: state.childrenDrawer ? "absolute" : "relative", border: 0, padding: 0, backgroundColor: "var(--primary)" }}
                headerStyle={{ backgroundColor: "var(--primary)" }}
                drawerStyle={{ backgroundColor: "var(--primary)" }}
                closeIcon={<span className="close_btn">&times;</span>}
            >
                <br />
                <AppNavItem linkText="Home" />
                <AppNavItem linkText="About Us" />
                <AppNavItem linkText="Admissions" onClick={showChildrenDrawer} />
                <AppNavItem linkText="Gallery" />

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
            >
                <br />
                <AppNavItem linkText="Nursery" />
                <AppNavItem linkText="Primary" />
                <AppNavItem linkText="Secondary" />
            </Drawer>
        </div>
    )
}

export default AppMenu
