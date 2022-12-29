import React from "react";
import "./ChooseTime.css";
import { MdOutlineToday } from "react-icons/md";

const ChooseTime = () => {
    return (
        <>
            <div className="choose-time">
                <form action="">
                    <input type="text" placeholder="اختر الفترة من-إلى" />
                    <button>
                        <MdOutlineToday />
                    </button>
                </form>
            </div>
        </>
    );
};

export default ChooseTime;
