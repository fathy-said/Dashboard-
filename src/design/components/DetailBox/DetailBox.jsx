import React from "react";
import "./DetailBox.css";
import { GiStarFormation } from "react-icons/gi";
import { AiOutlineUser, AiOutlineShop } from "react-icons/ai";

import { ArgBox, ChooseTime, DetailInfo, ProductTables } from "../index";
import { BiMoney } from "react-icons/bi";
import { FiCornerUpRight } from "react-icons/fi";
import { FaShoppingBasket } from "react-icons/fa";
import StockChart from "../StockChart/StockChart";
import ImgProportion from "../../assets/img/Screenshot 2022-12-30 190923.png";
import ImgMap from "../../assets/img/Screenshot 2022-12-30 190708.png";

const DetailBox = () => {
    return (
        <>
            <div className="detail-box  col-lg-10">
                <div className="box-1">
                    <div className="box-header">
                        <ArgBox
                            svg={<AiOutlineShop />}
                            increase={20}
                            title={"المتاجر"}
                            number={"170"}
                        />
                        <ArgBox
                            svg={<AiOutlineUser />}
                            increase={45}
                            title={"المندوبين"}
                            number={"815"}
                        />
                        <ArgBox
                            svg={<GiStarFormation />}
                            increase={20}
                            title={"المتاجر"}
                            number={"170"}
                        />
                    </div>
                    <div className="statistic-store">
                        <ChooseTime />
                        <div className="all  ">
                            <div className="info">
                                <DetailInfo
                                    name={"عدد المتاجر"}
                                    svg={<FaShoppingBasket />}
                                    number={"222"}
                                />
                                <DetailInfo
                                    name={"عدد المتاجر"}
                                    svg={<BiMoney />}
                                    number={"222"}
                                />
                                <DetailInfo
                                    name={"عدد المتاجر"}
                                    svg={<FiCornerUpRight />}
                                    number={"222"}
                                />
                                <DetailInfo
                                    name={"عدد المتاجر"}
                                    svg={<BiMoney />}
                                    number={"222"}
                                />
                            </div>
                            <div className="content">
                                <h5>احصائيات المتاجر</h5>
                                <h6>Avg. $5,309</h6>
                                <StockChart />
                            </div>
                        </div>
                    </div>
                    <div className="content-order">
                        <div className="top">
                            <div className="info">
                                <h5> احصائيات الطلبات</h5>
                                <h6>250</h6>
                            </div>
                            <ChooseTime />
                        </div>

                        <StockChart />
                    </div>
                    <div className="statistic-box">
                        <div className="row gap-4 gap-xl-0">
                            <div className="box-right  col-xl-4">
                                <div className="box">
                                    <h6>إجمالي استخدام النظام</h6>
                                    <div className="content">
                                        <div className="box-img">
                                            <img src={ImgProportion} alt="" />
                                        </div>
                                        <ul>
                                            <li>
                                                <h6>% 15 تابلت</h6>
                                                <span></span>
                                            </li>
                                            <li>
                                                <h6>% 35 لابتوب</h6>
                                                <span></span>
                                            </li>
                                            <li>
                                                <h6>% 50 موبايل</h6>
                                                <span></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="box-left  col-xl-8">
                                <div className="box">
                                    <h5>المناطق الأكثر اشتراكاً</h5>
                                    <div className="all">
                                        <div className="box-img">
                                            <img src={ImgMap} alt="" />
                                        </div>
                                        <ul>
                                            <li>
                                                <h6>
                                                    الرياض
                                                    <span></span>
                                                </h6>
                                                <span>$29,193</span>
                                            </li>
                                            <li>
                                                <h6>
                                                    جدة
                                                    <span></span>
                                                </h6>
                                                <span>$18,832 </span>
                                            </li>
                                            <li>
                                                <h6>
                                                    الدمام
                                                    <span></span>
                                                </h6>
                                                <span>$19,758</span>
                                            </li>
                                            <li>
                                                <h6>
                                                    الأحساء
                                                    <span></span>
                                                </h6>
                                                <span>$23,078 </span>
                                            </li>
                                            <li>
                                                <h6>
                                                    نجران
                                                    <span></span>
                                                </h6>
                                                <span>$29,193</span>
                                            </li>
                                            <li>
                                                <h6>
                                                    المدينة المنورة
                                                    <span></span>
                                                </h6>
                                                <span>$760,37</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProductTables />
                </div>
            </div>
        </>
    );
};

export default DetailBox;
