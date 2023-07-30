import React from 'react'

function Block(props) {
    return (
        <div onClick={props.onClick} className={' border-2 border-gray-300 p-4 rounded-3xl hover:border-primary duration-200 ' + props.className}>
            {props.children}
        </div>
    )
}

export default Block
