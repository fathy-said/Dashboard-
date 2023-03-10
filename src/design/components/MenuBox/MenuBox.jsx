import React, { useState } from "react";
import "./MenuBox.css";
import { ReactComponent as BoxSvg } from "../../assets/Icons/icon-3.svg";
import { ReactComponent as HeadSvg } from "../../assets/Icons/icon-24-dashboard.svg";
import { ReactComponent as MarkSvg } from "../../assets/Icons/icon-24-marketing campain.svg";
import { ReactComponent as Svgprice } from "../../assets/Icons/icon-24-price.svg";
import { ReactComponent as SvgCategory } from "../../assets/Icons/icon-24-Category.svg";
import { ReactComponent as Svgmanagement } from "../../assets/Icons/icon-24-management store.svg";
import { ReactComponent as Svgtemplate } from "../../assets/Icons/icon-24-template.svg";
import { ReactComponent as Svgpages } from "../../assets/Icons/icon-24-pages.svg";
import { ReactComponent as Svgclient } from "../../assets/Icons/icon-24- client.svg";
import { ReactComponent as Svgmarketing } from "../../assets/Icons/icon-24-marketing.svg";
import { ReactComponent as Svgsuper } from "../../assets/Icons/icon-24- super category.svg";
import { ReactComponent as Svgdollar } from "../../assets/Icons/icon-24-dollar.svg";
import { ReactComponent as Svgsupport } from "../../assets/Icons/icon-24-support.svg";
import { ReactComponent as Svgsetting } from "../../assets/Icons/icon-24-setting.svg";
import { ReactComponent as Svgsign } from "../../assets/Icons/icon-24-sign out.svg";
import { HiChevronLeft } from "react-icons/hi2";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

const MenuBox = () => {
    const [dategate, setDategate] = useState(false);
    const [merchant, setMerchant] = useState(false);
    const [menu, setMenu] = useState(false);
    let navigate = useNavigate("");

    return (
        <>
            {/* <div className="menu-box col-2"> */}
            <div
                className={
                    menu === true ? "menu-box col-2 active" : "menu-box col-2"
                }
            >
                <div className="box">
                    <div className="all">
                        <ul>
                            <li>
                                الرئيسية <HeadSvg />
                            </li>
                            <li>
                                <HiChevronLeft className="trf" />
                                السوق
                                <BoxSvg />
                            </li>

                            <div
                                className={
                                    merchant === true ? "info active" : "info"
                                }
                            >
                                <li
                                    onClick={(e) => {
                                        setMerchant(!merchant);
                                    }}
                                >
                                    <HiChevronLeft className="trf" />
                                    المتاجر
                                    <MarkSvg />
                                </li>
                                <div className="box">
                                    <li>
                                        نشاط المتاجر
                                        <span></span>
                                    </li>
                                    <li>
                                        المتاجر
                                        <span></span>
                                    </li>
                                    <li
                                        onClick={() =>
                                            navigate("/registration")
                                        }
                                    >
                                        حالة التسجيل <span></span>
                                    </li>
                                </div>
                            </div>
                            <li>
                                <HiChevronLeft className="trf" />
                                الباقات <Svgprice />
                            </li>
                            <li>
                                الخدمات
                                <SvgCategory />
                            </li>
                            <li>
                                أكاديمية اطلبها
                                <Svgmanagement />
                            </li>

                            <li>
                                القالب
                                <Svgtemplate />
                            </li>
                            <li>
                                الصفحات
                                <Svgpages />
                            </li>

                            <Link to={"/user"}>
                                <li>
                                    المستخدمين
                                    <Svgclient />
                                </li>
                            </Link>
                            <li>
                                التسويق
                                <Svgmarketing />
                            </li>
                            <div
                                className={
                                    dategate === true ? "info active" : "info"
                                }
                            >
                                <li
                                    onClick={(e) => {
                                        setDategate(!dategate);
                                    }}
                                >
                                    <HiChevronLeft className="trf" />
                                    المندوبين
                                    <Svgclient />
                                </li>
                                <div className="box">
                                    <li>
                                        عرض المناديب<span></span>
                                    </li>
                                    <li>
                                        حالة التسجيل <span></span>
                                    </li>
                                </div>
                            </div>

                            <li>
                                <span></span>التصنيفات
                                <SvgCategory />
                            </li>
                            <li>
                                الطلبات
                                <Svgsuper />
                            </li>
                            <li>
                                المحفظة
                                <Svgdollar />
                            </li>
                            <li>
                                الدعم الفني
                                <Svgsupport />
                            </li>
                            <li>
                                الإعدادات
                                <Svgsetting />
                            </li>
                        </ul>
                        <div className="logOut">
                            <span></span>
                            <button>
                                تسجيل خروج
                                <Svgsign />
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="show-menu"
                    onClick={() => {
                        setMenu(!menu);
                    }}
                >
                    <CgMenuRightAlt />
                </div>
            </div>
        </>
    );
};

export default MenuBox;

// <div className={dategate == true ? "info active" : "info"}>
//     <li
//         onClick={(e) => {
//             setDategate(!dategate);
//         }}
//     >
//         <HiChevronLeft
//             className="trf"
//             onClick={(e) => {
//                 setDategate(!dategate);
//             }}
//         />
//         المندوبين
//         <Svgclient
//             onClick={(e) => {
//                 setDategate(!dategate);
//             }}
//         />
//     </li>
//     <div className="box">
//         <li>
//             عرض المناديب<span></span>
//         </li>
//         <li>
//             حالة التسجيل <span></span>
//         </li>
//     </div>
// </div>;
