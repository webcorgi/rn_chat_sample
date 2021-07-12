import React, {useState, useContext} from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';


function CountingText() {
    const { isCounter } = useSelector(state => state.counterReducer)

    return (
        <>
        {isCounter === false 
            ? <TextBefore>CountingMe</TextBefore>
            : <TextAfter>youCountedMe</TextAfter>
        }
        </>
    );
}

export default CountingText;

/*********************************************************
* styling
*********************************************************/
const TextBefore = styled.Text`
    font-size:40px;
    color:red;
`;

const TextAfter = styled.Text`
    font-size:35px;
    color:green;
`;