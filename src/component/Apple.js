import React from 'react'

export default function Apple(props) {
    return (
        <div>{`The current URL is localhost:/#${props.match.path}`}</div>
    )
}