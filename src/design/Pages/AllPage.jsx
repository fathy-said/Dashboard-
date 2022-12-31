import React from "react";
import { Home, User } from "./";
import { Navbar } from "../components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const AllPage = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<User />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AllPage;
