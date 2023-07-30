import React from "react";
import {
    Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis
} from "recharts";

function DistributionsBySuppliers(props) {

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (<div className="custom-toolti bg-white p-4 rounded-2xl shadow-xl">
                <p>{`${payload[0].value} €`}</p>
            </div>);
        }

        return null;
    };

    return (<ResponsiveContainer width="100%" height="95%">
        <BarChart data={props.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" fill="#f43f5e" />
        </BarChart>
    </ResponsiveContainer>);
}

export default DistributionsBySuppliers;
