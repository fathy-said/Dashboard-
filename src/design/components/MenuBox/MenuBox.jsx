import React from 'react';
import "./MenuBox.css"
import { ReactComponent as BoxSvg } from "../../assets/Icons/icon-3.svg"
import { ReactComponent as HeadSvg } from "../../assets/Icons/icon-24-dashboard.svg"
import { ReactComponent as MarkSvg } from "../../assets/Icons/icon-24-marketing campain.svg"
import { ReactComponent as Svgprice } from "../../assets/Icons/icon-24-price.svg"
import { ReactComponent as SvgCategory } from "../../assets/Icons/icon-24-Category.svg"
import { ReactComponent as Svgmanagement } from "../../assets/Icons/icon-24-management store.svg"
import { ReactComponent as Svgtemplate } from "../../assets/Icons/icon-24-template.svg"
import { ReactComponent as Svgpages } from "../../assets/Icons/icon-24-pages.svg"
import { ReactComponent as Svgclient } from "../../assets/Icons/icon-24- client.svg"
import { ReactComponent as Svgmarketing } from "../../assets/Icons/icon-24-marketing.svg"
import { ReactComponent as Svgdelivery } from "../../assets/Icons/icon-24-delivery.svg"
import { ReactComponent as Svgsuper } from "../../assets/Icons/icon-24- super category.svg"
import { ReactComponent as Svgdollar } from "../../assets/Icons/icon-24-dollar.svg"
import { ReactComponent as Svgsupport } from "../../assets/Icons/icon-24-support.svg"
import { ReactComponent as Svgsetting } from "../../assets/Icons/icon-24-setting.svg"
import { ReactComponent as Svgsign } from "../../assets/Icons/icon-24-sign out.svg"
const MenuBox = () => {
  return (
    <>

      <div className="menu-box col-2">
        <div className="box">
          <ul>
            <li>الرئيسية <HeadSvg /> </li>
            <li>السوق <BoxSvg /></li>
            <li>المتاجر<MarkSvg /></li>
            <li>الباقات <Svgprice /></li>
            <li>الخدمات<SvgCategory /></li>

            <li>أكاديمية اطلبها<Svgmanagement /></li>
            <li>الصفحات<Svgtemplate /></li>
            <li>المستخدمين<Svgpages /></li>
            <li>التسويق<Svgclient /></li>

            <div className="info">
              <li>المندوبين<Svgmarketing /></li>
              <div className="box"></div>
              <li>عرض المناديب<span></span></li>
              <li>حالة التسجيل <span></span></li>
            </div>

            <li><span></span>التصنيفات<SvgCategory /> </li>
            <li>الطلبات<Svgsuper /></li>
            <li>المحفظة<Svgdollar /></li>
            <li>الدعم الفني<Svgsupport /></li>
            <li>الإعدادات<Svgsetting /></li>
          </ul>
          <div className="logOut">
            <span></span>
            <button>تسجيل خروج<Svgsign /></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuBox;
