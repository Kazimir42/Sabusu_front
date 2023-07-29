import React from "react";

function Modal(props) {
    return (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
            <div className=" bg-white rounded-3xl p-8 duration-500">
                {props.children}
            </div>
        </div>
    );
}

export default Modal;
