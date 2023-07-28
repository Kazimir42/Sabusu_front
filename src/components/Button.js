import React from "react";

function Button(props) {
    return (<button
        type={props.type}
        onClick={props.onClick}
        className={"inline-flex items-center px-4 py-2 bg-primary border border-transparent rounded-md font-semibold text-white hover:bg-primary-dark disabled:opacity-25 transition ease-in-out duration-200 " + props.className}>
        {props.children}
    </button>);
}

export default Button;
