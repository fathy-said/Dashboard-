import React from "react";
import "./ArgBox.css";
const ArgBox = ({ svg, increase, number, title }) => {
    return (
        <>
            <div className="box-arg">
                <h6>عدد {title}</h6>
                <div className="info">
                    <span>{svg}</span>
                    <span>{number}</span>
                    <span>% {increase} +</span>
                </div>
            </div>
        </>
    );
};

export default ArgBox;
