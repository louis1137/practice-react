import React from 'react'

const Box = ({children, item, ...props}) => {

    const cssBox = {
        float : 'left',
        position : 'relative',
        margin : '20px',
        width : '300px',
        height : '300px',
        border : '8px solid #ddd',
        backgroundImage : 'url('+item?.src+')',
        borderRadius : '50%'
    }

    const cssType = {
        position : 'absolute',
        top : '7%',
        left : '50%',
        transform : 'translateX(-50%)',
        fontSize : '24px',
    }

    const cssResult = {
        position : 'absolute',
        top : '110%',
        left : '50%',
        transform : 'translateX(-50%)',
        color : props.result == '승리' ? 'red' : 'blue',
        fontSize : '48px',
        whiteSpace : 'nowrap',
    }

    const cssText = {
        position : 'absolute',
        top : '84%',
        left : '50%',
        transform : 'translateX(-50%)',
        fontSize : '24px',
    }

    return (
        <div style={cssBox} className={props.className}>
            <b style={cssType}>{props.type}</b>
            <b style={cssResult}>{props.result}</b>
            <b style={cssText}>{item?.name}</b>
        </div>
    )
}

export default Box