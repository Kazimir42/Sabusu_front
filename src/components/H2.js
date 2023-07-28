import React from 'react'

function H2(props) {
    return <h2 className={'text-2xl font-bold ' + props.className}>{props.children}</h2>
}

export default H2
