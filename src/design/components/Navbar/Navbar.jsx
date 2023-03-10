import React from "react";
import ImgUser from "../../assets/img/person-1.jpg";
import "./Navbar.css";
import { FaEnvelope, FaBell } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { AiOutlineSearch, AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => (
    <>
        <div className="header">
            <div className="content">
                <div className="row ">
                    <div className="logo col-md-2">
                        <Link to={"/"}>
                            <AiOutlineHome />
                            <h5>الموقع</h5>
                        </Link>
                    </div>
                    <div className="user-detail col-8 col-md-3">
                        <div className="box-img">
                            <img src={ImgUser} alt="" />
                        </div>
                        <div className="box">
                            <HiOutlineChevronDown />
                            <h6>محمد عبد الرحمن</h6>
                        </div>
                    </div>
                    <div className="info col-4 col-md-2">
                        <span>
                            <FaBell />
                        </span>
                        <span>
                            <FaEnvelope />
                        </span>
                    </div>
                    <div className="box-form col-12 col-md-5">
                        <form action="" className="box-form col-5">
                            <button>
                                <AiOutlineSearch />
                            </button>
                            <input
                                type="text"
                                placeholder="هنا ستجد ما تبحث عنه"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Navbar;
