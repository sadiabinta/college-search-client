import React from 'react';
import { Outlet } from "react-router-dom";
import NavHeader from './../../shared/NavHeader/NavHeader';
import Footer from './../../shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavHeader />
            <Outlet/>
            <Footer />
        </div>
    );
};

export default Main;