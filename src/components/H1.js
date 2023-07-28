import React from 'react'

function H1(props) {
    return <h1 className={'text-3xl font-bold ' + props.className}>{props.children}</h1>
}

export default H1
