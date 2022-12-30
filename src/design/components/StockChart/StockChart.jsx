import React from "react";
import { Line } from "react-chartjs-2";
import { UserData } from "../../Data/dataChart";
import { Chart as ChartJS } from "chart.js/auto";
import "./StockChart.css";
let data = {
    labels: UserData.map((data) => data.year),
    datasets: [
        {
            label: "احصائيات",
            data: UserData.map((data) => data.userGain),
            borderColor: "#1dbbbe",
        },
    ],
};

let options = {
    responsive: true,

    maintainAspectRatio: false,
    interaction: {
        mode: "index",
        intersect: false,
        axis: "x",
    },
    plugins: {
        tooltip: {
            enabled: true,
        },
        legend: false,
    },
    scales: {
        y: {
            display: false,
        },
        x: {
            grid: {
                drawBorder: false,
                borderDash: [7],
                color: "#A7A7A7",
                border: false,
            },
            ticks: {
                color: "#A7A7A7",
                font: {
                    size: "14px",
                },
            },
        },
    },
};

const StockChart = () => {
    return (
        <>
            <div className="stockChart">
                <Line data={data} options={options} />
            </div>
        </>
    );
};

export default StockChart;
