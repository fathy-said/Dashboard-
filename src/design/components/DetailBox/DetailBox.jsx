import React from "react";
import "./DetailBox.css";
import { GiStarFormation } from "react-icons/gi";
import { AiOutlineUser, AiOutlineShop } from "react-icons/ai";

import { ArgBox, ChooseTime, DetailInfo } from "../index";
import { BiMoney } from "react-icons/bi";
import { FiCornerUpRight } from "react-icons/fi";
import { FaShoppingBasket } from "react-icons/fa";

const DetailBox = () => {
    return (
        <>
            <div className="detail-box col-10">
                <div className="box">
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
                        <div className="all">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailBox;
