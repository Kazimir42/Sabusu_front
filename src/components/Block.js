import React from 'react'

function Block(props) {
    return (
        <div onClick={props.onClick} className={'bg-white overflow-hidden shadow-md rounded-xl ' + props.class}>
            {props.children}
        </div>
    )
}

export default Block
