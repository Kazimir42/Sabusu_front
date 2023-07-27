import React from 'react'

function H3(props) {
    return <h3 className={'text-xl ' + props.class}>{props.children}</h3>
}

export default H3
