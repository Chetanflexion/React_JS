import React from "react";

export const Box = props => {
    return (
        <div>
            <span>{Element(1)}</span>
            <span>{Element(2)}</span>
        </div>
    )
}

let Element = value => {
    return (
        <div>
            <span>Element{value}</span>
        </div>
    )
}