import React from "react";
import "./RegistrationPage.css";
import { ReactComponent as BackSvg } from "../../../assets/Icons/icon-30-arrwos back.svg";
import { MdOutlineFilterAlt } from "react-icons/md";

const RegistrationPage = ({ registration, setRegistration }) => {
    return (
        <>
            <div className="registration-box col-lg-10">
                <div className="box">
                    <div className="top">
                        <div className="box-header">
                            <h5>
                                فلتر
                                <MdOutlineFilterAlt />
                            </h5>
                            <h6>
                                / حالة السجيل
                                <span
                                    onClick={() => {
                                        setRegistration(!registration);
                                    }}
                                >
                                    الرئيسية
                                    <BackSvg />
                                </span>
                            </h6>
                        </div>
                        <ul>
                            <li>لتسجيل مع موافقة الإدارة</li>
                            <li>لتسجيل مع موافقة الإدارة</li>
                            <li>لتسجيل مع موافقة الإدارة</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegistrationPage;
