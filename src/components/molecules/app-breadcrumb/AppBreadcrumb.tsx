import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import "./AppBreadcrumb.css"

const AppBreadcrumb = () => {
    const breadcrumbs = useBreadcrumbs();
    return (
        <div className="app-breadcrumb">
            {breadcrumbs.map((value, index) => {

                return <Fragment key={index}> <NavLink to={value.key} >{value.breadcrumb} </NavLink> &nbsp;  {index !== breadcrumbs.length - 1 ? <i className="fas fa-angle-right"></i> : <></>} &nbsp;   </Fragment>
            })}
        </div>
    )
}

export default AppBreadcrumb
