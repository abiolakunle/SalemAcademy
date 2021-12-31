import { Button, Drawer } from 'antd'
import React, { useState } from 'react'

const AppMenu = () => {

    const [state, setState] = useState({ visible: false, childrenDrawer: false });

    const showDrawer = () => {
        setState({
            ...state,
            visible: true,
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
        });
    };

    const onChildrenDrawerClose = () => {
        setState({
            ...state,
            childrenDrawer: false,
        });
    };
    return (
        <div>
            <Button type="primary" onClick={showDrawer}>
                Open drawer
            </Button>
            <Drawer
                title="Multi-level drawer"
                width={520}
                closable={false}
                onClose={onClose}
                visible={state.visible}
            >
                <Button type="primary" onClick={showChildrenDrawer}>
                    Two-level drawer
                </Button>
                <Drawer

                    width={320}
                    closable={false}
                    onClose={onChildrenDrawerClose}
                    visible={state.childrenDrawer}
                >
                    This is two-level drawer
                </Drawer>
            </Drawer>
        </div>
    )
}

export default AppMenu
