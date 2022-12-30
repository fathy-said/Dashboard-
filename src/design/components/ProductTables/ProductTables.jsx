import React from "react";
import "./ProductTables.css";
import Table from "react-bootstrap/Table";
import Img from "../../assets/img/person-1.jpg";
import { ReactComponent as GiftSvg } from "../../assets/Icons/icon-26-gift.svg";
import { ReactComponent as Star1Svg } from "../../assets/Icons/icon-20-star.svg";
import { ReactComponent as Star2Svg } from "../../assets/Icons/icon-20-star_half.svg";
import { ReactComponent as ClinicSvg } from "../../assets/Icons/iocn-26-Clinic.svg";
const ProductTables = () => {
    return (
        <>
            <div className="product-tables ">
                <div className="box-right box">
                    <h5>المنتجات الأكثر زيارة</h5>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th></th>
                                <th>رقم المنتج</th>
                                <th>الاسم</th>
                                <th>التصنيف</th>
                                <th>السعر</th>
                                <th>اجمالي المبيعات</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <img src={Img} alt="" />
                                    <span>005</span>
                                </td>
                                <td>
                                    <span> حذاء نايك</span>
                                </td>
                                <td>
                                    <span>أحذية</span>
                                </td>
                                <td>
                                    <span>35</span>
                                </td>
                                <td>
                                    <span>9830</span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <img src={Img} alt="" />
                                    <span>005</span>
                                </td>
                                <td>
                                    <span> حذاء نايك</span>
                                </td>
                                <td>
                                    <span>أحذية</span>
                                </td>
                                <td>
                                    <span>35</span>
                                </td>
                                <td>
                                    <span>9830</span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <img src={Img} alt="" />
                                    <span>005</span>
                                </td>
                                <td>
                                    <span> حذاء نايك</span>
                                </td>
                                <td>
                                    <span>أحذية</span>
                                </td>
                                <td>
                                    <span>35</span>
                                </td>
                                <td>
                                    <span>9830</span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <img src={Img} alt="" />
                                    <span>005</span>
                                </td>
                                <td>
                                    <span> حذاء نايك</span>
                                </td>
                                <td>
                                    <span>أحذية</span>
                                </td>
                                <td>
                                    <span>35</span>
                                </td>
                                <td>
                                    <span>9830</span>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="box-left box">
                    <h5>المتاجر الأكثر زيارة</h5>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th></th>
                                <th>اسم المتجر</th>
                                <th>التصنيف</th>
                                <th>تقييم العملاء</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <span>أمازون</span>
                                </td>
                                <td>
                                    <span>
                                        <GiftSvg />
                                        هدايا وألعاب
                                    </span>
                                </td>
                                <td>
                                    <span>
                                        <h6>
                                            4.8
                                            <Star2Svg />
                                        </h6>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <span>صحتي</span>
                                </td>
                                <td>
                                    <span>
                                        <ClinicSvg />
                                        مستلزمات طبية
                                    </span>
                                </td>
                                <td>
                                    <span>
                                        <h6>
                                            2.1
                                            <Star2Svg />
                                        </h6>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <span>أمازون</span>
                                </td>
                                <td>
                                    <span>
                                        <GiftSvg />
                                        هدايا وألعاب
                                    </span>
                                </td>
                                <td>
                                    <span>
                                        <h6>
                                            4.8
                                            <Star2Svg />
                                        </h6>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <span>صحتي</span>
                                </td>
                                <td>
                                    <span>
                                        <ClinicSvg />
                                        مستلزمات طبية
                                    </span>
                                </td>
                                <td>
                                    <span>
                                        <h6>
                                            2.1
                                            <Star2Svg />
                                        </h6>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default ProductTables;
