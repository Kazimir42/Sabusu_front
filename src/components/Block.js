import React from 'react'

function Container(props) {
    return (
        <div className={'bg-white overflow-hidden shadow-md rounded-xl ' + props.className}>
            {props.children}
        </div>
    )
}

export default Container
