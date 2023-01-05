import React from "react";
import "./RegistrationPage.css";
import { MdOutlineFilterAlt } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";

import Table from "react-bootstrap/Table";
import { ReactComponent as BackSvg } from "../../../assets/Icons/icon-30-arrwos back.svg";
import { ReactComponent as GiftSvg } from "../../../assets/Icons/icon-26-gift.svg";
import { ReactComponent as ClinicSvg } from "../../../assets/Icons/iocn-26-Clinic.svg";
import { ReactComponent as SortSvg } from "../../../assets/Icons/icon-24-sort.svg";
import { ReactComponent as SwitchSvg } from "../../../assets/Icons/icon-38-switch.svg";
import { ReactComponent as DeleteSvg } from "../../../assets/Icons/icon-24-delete.svg";
import { useNavigate } from "react-router-dom";
const RegistrationPage = () => {
    let navigate = useNavigate("");
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
                                        navigate("/");
                                    }}
                                >
                                    الرئيسية
                                    <BackSvg />
                                </span>
                            </h6>
                        </div>
                        <ul>
                            <li>لتسجيل مع موافقة الإدارة</li>
                            <li>إيقاف التسجيل</li>
                            <li>التسجيل تلقائي</li>
                        </ul>
                    </div>
                    <div className="content">
                        <h5 className="title">
                            تحديد الكل
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                defaultChecked=""
                            />
                        </h5>

                        <Table>
                            <thead>
                                <tr>
                                    <th>اسم المتجر</th>
                                    <th>
                                        اسم النشاط <SortSvg />
                                    </th>
                                    <th>
                                        الحالة <SortSvg />
                                    </th>
                                    <th>
                                        <span>الإجراء</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                defaultChecked=""
                                            />
                                            <h6>أمازون</h6>
                                        </span>
                                    </td>
                                    <td>
                                        <span>
                                            <GiftSvg />
                                            هدايا وألعاب
                                        </span>
                                    </td>
                                    <td>
                                        <span className="sn">
                                            <h6>نشط</h6>
                                        </span>
                                    </td>
                                    <td>
                                        <span>
                                            <SwitchSvg />
                                            <DeleteSvg />
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                defaultChecked=""
                                            />
                                            <h6>صحتي</h6>
                                        </span>
                                    </td>
                                    <td>
                                        <td>
                                            <span>
                                                <ClinicSvg />
                                                مستلزمات طبية
                                            </span>
                                        </td>
                                    </td>
                                    <td>
                                        <span className="">
                                            <h6>غير نشط</h6>
                                        </span>
                                    </td>
                                    <td>
                                        <span>
                                            <SwitchSvg />
                                            <DeleteSvg />
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                defaultChecked=""
                                            />
                                            <h6>صحتي</h6>
                                        </span>
                                    </td>
                                    <td>
                                        <td>
                                            <span>
                                                <ClinicSvg />
                                                مستلزمات طبية
                                            </span>
                                        </td>
                                    </td>
                                    <td>
                                        <span className="">
                                            <h6>غير نشط</h6>
                                        </span>
                                    </td>
                                    <td>
                                        <span>
                                            <SwitchSvg />
                                            <DeleteSvg />
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                defaultChecked=""
                                            />
                                            <h6>أمازون</h6>
                                        </span>
                                    </td>
                                    <td>
                                        <span>
                                            <GiftSvg />
                                            هدايا وألعاب
                                        </span>
                                    </td>
                                    <td>
                                        <span className="sn">
                                            <h6>نشط</h6>
                                        </span>
                                    </td>
                                    <td>
                                        <span>
                                            <SwitchSvg />
                                            <DeleteSvg />
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                defaultChecked=""
                                            />
                                            <h6>صحتي</h6>
                                        </span>
                                    </td>
                                    <td>
                                        <td>
                                            <span>
                                                <ClinicSvg />
                                                مستلزمات طبية
                                            </span>
                                        </td>
                                    </td>
                                    <td>
                                        <span className="">
                                            <h6>غير نشط</h6>
                                        </span>
                                    </td>
                                    <td>
                                        <span>
                                            <SwitchSvg />
                                            <DeleteSvg />
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                defaultChecked=""
                                            />
                                            <h6>صحتي</h6>
                                        </span>
                                    </td>
                                    <td>
                                        <td>
                                            <span>
                                                <ClinicSvg />
                                                مستلزمات طبية
                                            </span>
                                        </td>
                                    </td>
                                    <td>
                                        <span className="">
                                            <h6>غير نشط</h6>
                                        </span>
                                    </td>
                                    <td>
                                        <span>
                                            <SwitchSvg />
                                            <DeleteSvg />
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="footer-info">
                        <ul>
                            <li>
                                <FaChevronLeft />
                            </li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>...</li>
                            <li>
                                <FaChevronLeft />
                            </li>
                        </ul>
                        <button>
                            <span>
                                <FaChevronLeft />
                            </span>
                            عدد الصفوف
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegistrationPage;
