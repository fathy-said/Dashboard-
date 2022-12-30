import React from "react";
import "./DetailBox.css";
import { GiStarFormation } from "react-icons/gi";
import { AiOutlineUser, AiOutlineShop } from "react-icons/ai";

import { ArgBox, ChooseTime, DetailInfo, ProductTables } from "../index";
import { BiMoney } from "react-icons/bi";
import { FiCornerUpRight } from "react-icons/fi";
import { FaShoppingBasket } from "react-icons/fa";
import StockChart from "../StockChart/StockChart";

const DetailBox = () => {
    return (
        <>
            <div className="detail-box col-10">
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
                    <ProductTables />
                </div>
            </div>
        </>
    );
};

export default DetailBox;
