import React from "react";
import { Home } from "./";
import { Navbar, FooterOverlay } from "../components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const AllPage = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                {/* <FooterOverlay /> */}
            </BrowserRouter>
        </>
    );
};

export default AllPage;
