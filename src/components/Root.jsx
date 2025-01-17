import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Login></Login>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;