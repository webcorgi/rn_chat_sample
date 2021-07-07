import React, {useState, useContext} from 'react';
import {StoreContext} from "../context/storeContext";
import styled from 'styled-components/native';

function CountingText() {
    // 전역 어디서든 아래의 소스로 state, actions를 가져와 사용하면 끝.
    const {state, actions} = useContext(StoreContext);

    return (
        <>
        {state.counterStates.isCounter === false 
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