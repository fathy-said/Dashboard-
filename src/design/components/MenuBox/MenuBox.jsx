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
                                ???????????????? <HeadSvg />
                            </li>
                            <li>
                                <HiChevronLeft className="trf" />
                                ??????????
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
                                    ??????????????
                                    <MarkSvg />
                                </li>
                                <div className="box">
                                    <li>
                                        ???????? ??????????????
                                        <span></span>
                                    </li>
                                    <li>
                                        ??????????????
                                        <span></span>
                                    </li>
                                    <li
                                        onClick={() =>
                                            navigate("/registration")
                                        }
                                    >
                                        ???????? ?????????????? <span></span>
                                    </li>
                                </div>
                            </div>
                            <li>
                                <HiChevronLeft className="trf" />
                                ?????????????? <Svgprice />
                            </li>
                            <li>
                                ??????????????
                                <SvgCategory />
                            </li>
                            <li>
                                ???????????????? ????????????
                                <Svgmanagement />
                            </li>

                            <li>
                                ????????????
                                <Svgtemplate />
                            </li>
                            <li>
                                ??????????????
                                <Svgpages />
                            </li>

                            <Link to={"/user"}>
                                <li>
                                    ????????????????????
                                    <Svgclient />
                                </li>
                            </Link>
                            <li>
                                ??????????????
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
                                    ??????????????????
                                    <Svgclient />
                                </li>
                                <div className="box">
                                    <li>
                                        ?????? ????????????????<span></span>
                                    </li>
                                    <li>
                                        ???????? ?????????????? <span></span>
                                    </li>
                                </div>
                            </div>

                            <li>
                                <span></span>??????????????????
                                <SvgCategory />
                            </li>
                            <li>
                                ??????????????
                                <Svgsuper />
                            </li>
                            <li>
                                ??????????????
                                <Svgdollar />
                            </li>
                            <li>
                                ?????????? ??????????
                                <Svgsupport />
                            </li>
                            <li>
                                ??????????????????
                                <Svgsetting />
                            </li>
                        </ul>
                        <div className="logOut">
                            <span></span>
                            <button>
                                ?????????? ????????
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
//         ??????????????????
//         <Svgclient
//             onClick={(e) => {
//                 setDategate(!dategate);
//             }}
//         />
//     </li>
//     <div className="box">
//         <li>
//             ?????? ????????????????<span></span>
//         </li>
//         <li>
//             ???????? ?????????????? <span></span>
//         </li>
//     </div>
// </div>;
