import React from "react";

function Input(props) {
    return (<input
        disabled={props.disabled}
        type={props.type ?? "text"}
        onChange={props.onChange}
        value={props.value}
        required={props.required}
        className={"rounded-md shadow-sm border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 " + props.class}
    />);
}

export default Input;
