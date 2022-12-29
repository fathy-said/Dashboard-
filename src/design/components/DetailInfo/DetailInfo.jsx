import React from "react";
import "./DetailInfo.css";
const DetailInfo = ({ svg, number, name }) => {
    return (
        <>
            <div className="detail-info">
                <div>
                    <h5> {number}</h5>
                    <h6>{name}</h6>
                </div>
                <span>{svg}</span>
            </div>
        </>
    );
};

export default DetailInfo;
