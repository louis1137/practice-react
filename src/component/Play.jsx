import React, { useState } from 'react';

import Box from './Box';
import Button from './Button';

const Play = () => {

    const cssBoard = {
        overflow : 'hidden',
        margin : '200px auto 0',
        paddingBottom : '80px',
        width : '680px',
        textAlign : 'center',
    }

    const cssButtons = {
        overflow : 'hidden',
        margin : '0 auto 0',
        width : '680px',
        textAlign : 'center',
    }

    const list = {
        rock : {
            value : 0,
            name : '바위',
            src : 'https://feelstory.com/gnu/nori/img/2_on.png'
        },
        sissors : {
            value : 1,
            name : '가위',
            src : 'https://feelstory.com/gnu/nori/img/1_on.png'
        },
        paper : {
            value : 2,
            name : '보',
            src : 'https://feelstory.com/gnu/nori/img/3_on.png'
        }
    };
    const listKeys = Object.keys(list);

    const [userBox, setUserBox] = useState(null);
    const [computerBox, setComputerBox] = useState(null);
    const [userResult, setUserResult] = useState(null);
    const [computerResult, setComputerResult] = useState(null);

    const play = (index)=>{
        const rendomSelect = ()=>{
            const randomNumber = Number((Math.random()*10).toFixed())%listKeys.length;
            return list[listKeys[randomNumber]];
        };
        const userSelectBox = list[ listKeys[index] ];
        const computerSelectBox = rendomSelect();

        const userSelectvValue = userSelectBox.value;
        const computerSelecteValue = computerSelectBox.value;

        let gapValue = userSelectvValue - computerSelecteValue;
        gapValue = gapValue<0 ? gapValue+=3 : gapValue;

        gapValue ? (gapValue%2 ? setUserResult('패배') : setUserResult('승리')) : setUserResult('무승부');
        gapValue ? (gapValue%2 ? setComputerResult('승리') : setComputerResult('패배')) : setComputerResult('무승부');

        setUserBox(userSelectBox);
        setComputerBox(computerSelectBox);
    }

    return (
        <>
            <div className="board" style={cssBoard}>
                <Box item={userBox} result={userResult} type="유저"/>
                <Box item={computerBox} result={computerResult} type="컴퓨터"/>
            </div>
            <div className="buttons" style={cssButtons}>
                {
                    listKeys.map((name, index)=>{
                        return <Button onClick={()=>play(index)} key={index}>{list[name].name}</Button>
                    })
                }
            </div>
        </>
    )
}

export default Play