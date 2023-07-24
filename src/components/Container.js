import React from 'react'

function Container(props) {
    return (
        <div className="max-w-7xl mx-auto">
            {props.children}
        </div>
    )
}

export default Container
