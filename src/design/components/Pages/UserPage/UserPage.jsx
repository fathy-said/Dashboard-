import React from "react";
import "./UserPage.css";
import Img from "../../../assets/img/person-1.jpg";
import { ReactComponent as Svgcall } from "../../../assets/Icons/icon-24- call.svg";
import { ReactComponent as Svgemail } from "../../../assets/Icons/icon-24- email.svg";
const UserPage = () => {
  return (
    <>
      <div className="user-box">
        <div className="box-1">
          <div className="top">
            <h5>تعديل بيانات حسابي</h5>
            <div>
              <h6>جدول المستخدمين</h6> /
              <h6>تعديل بيانات المستخدم</h6>
            </div>
          </div>
          <div className="content">
            <div className="info">
              <div className="row">
                <div className="detail-content col-md-8">
                  <div className="box">
                    <div className="information">
                      <h5>خالد عبد الرحمن محمد</h5>
                      <h6 dir="ltr">
                        00@gmail.com
                        <Svgemail />
                      </h6>
                      <h6 dir="ltr">
                        9968461081 <Svgcall />
                      </h6>
                    </div>

                    <div className="box-img ">
                      <img src={Img} alt="" />
                    </div>
                  </div>
                </div>
                <div className="name col-md-4">
                  <h4>آدمن</h4>
                </div>
              </div>
            </div>
            <form action="">
              <div className="box-left">
                <div className="box">
                  <h6>كلمة المرور</h6>
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="00000000"
                  />
                  <h6>أدخل أرقام وحروف ورموز</h6>
                </div>
                <div className="box">
                  <h6>تأكيد كلمة المرور</h6>
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="00000000"
                  />
                  <h6>أدخل أرقام وحروف ورموز</h6>
                </div>
              </div>
              <div className="box-right">
                <select className="form-select" dir="">
                  <option selected>
                    اختر نوع الدور الوظيفي
                  </option>
                  <option value="1">
                    اختر نوع الدور الوظيفي
                  </option>
                  <option value="2">
                    اختر نوع الدور الوظيفي
                  </option>
                  <option value="3">
                    اختر نوع الدور الوظيفي
                  </option>
                </select>
                <div className="box">
                  <h6>اسم المستخدم</h6>
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="ادخل حروف فقط"
                  />
                </div>
                <div className="box">
                  <h6> البريد الالكتروني</h6>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="البريد الالكتروني"
                  />
                </div>
                <div className="box">
                  <h6>الصورة الشخصية</h6>
                  <input
                    className="form-control"
                    type="file"
                    name=""
                    id=""
                    placeholder=""
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="footer-box">
            <button>حفظ وإغلاق
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
