import React from 'react'

function BlockButton(props) {
    return (
        <button
            onClick={props.onClick}
            className={
                'overflow-hidden border border-gray-300 rounded-3xl h-44 cursor-pointer p-4 flex flex-col justify-evenly items-center hover:border-2 transition duration-200 ' +
                props.className
            }>
            {props.children}
        </button>
    )
}

export default BlockButton
