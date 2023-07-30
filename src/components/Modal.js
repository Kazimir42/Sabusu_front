import React from "react";

function Modal(props) {
    return (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50" onClick={props.onClose}>
            <div className=" bg-white rounded-3xl p-8 duration-500" onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;
