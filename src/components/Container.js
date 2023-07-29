import React from 'react'

function Container(props) {
    return (
        <div className={"max-w-7xl mx-auto " + props.className}>
            {props.children}
        </div>
    )
}

export default Container
