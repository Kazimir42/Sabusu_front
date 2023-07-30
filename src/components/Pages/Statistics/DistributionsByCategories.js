import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

function DistributionsByCategories(props) {
    const COLORS = ["#e11d48", "#f43f5e", "#fb7185", "#fda4af"];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="middle">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-toolti bg-white p-4 rounded-2xl shadow-xl">
                    <p>{payload[0].name}</p>
                    <p>{`${payload[0].value} €`}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie data={props.data} dataKey="value" nameKey="name" cx="50%" cy="50%" labelLine={false} legendType={"line"}
                     label={renderCustomizedLabel}
                     fill="#f43f5e" isAnimationActive={false}>
                    {(props.data ?? []).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default DistributionsByCategories;
