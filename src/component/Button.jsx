import React from 'react'

const Button = ({children, ...props}) => {

    const style = {
        display : 'inline-block',
        margin : '10px',
        width : '100px',
        height : '40px',
        border : '2px solid #ddd',
        borderRadius : '6px',
    }

    return (
        <button type='button' onClick={props.onClick} style={style}>{children}</button>
    )
}

export default Button