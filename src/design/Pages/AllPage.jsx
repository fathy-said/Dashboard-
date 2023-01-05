import React from "react";
import { Home, User, Registration } from "./";
import { MenuBox, Navbar } from "../components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const AllPage = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <div className="row Width 100% m-0 position-relative">
                    <MenuBox />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/registration"
                            element={<Registration />}
                        />
                        <Route path="/user" element={<User />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
};

export default AllPage;
