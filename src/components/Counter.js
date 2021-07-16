import React, {useState, useContext} from 'react';
import {StoreContext} from "../context/storeContext";
import styled from 'styled-components/native';

function Counter() {
    // 전역 어디서든 아래의 소스로 state, actions를 가져와 사용하면 끝.
    const {state, actions} = useContext(StoreContext);

    const clickPlus = () => {
        console.log("🚀 ~ file: Counter.js ~ line 10 ~ clickPlus ~ clickPlus")
        actions.counterActions.onIncrease();
        actions.counterActions.ChangeCounterText(true);
    }
    
    const clickMinus = () => {
        console.log("🚀 ~ file: Counter.js ~ line 16 ~ clickMinus ~ clickMinus")
        actions.counterActions.onDecrease();
        actions.counterActions.ChangeCounterText(true);
    }

    return (
        <Container>
            <BtnCount onPress={clickMinus}>
                <InnerText>-</InnerText>
            </BtnCount>
            
            {/* <TextNum>{state.counterStates.counter}</TextNum> */}
            
            <BtnCount onPress={clickPlus}>
                <InnerText>+</InnerText>
            </BtnCount>
        </Container>
    );
}

export default Counter;

/*********************************************************
* styling
*********************************************************/

const Container = styled.View`
    flex: 0.3;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #f5fcff;
`;

const BtnCount = styled.TouchableOpacity`
    width:50px;
    height:50px;
    border:1px solid #ddd;
`;

const InnerText = styled.Text`
    font-size:50px;
    height:50px;
    line-height:40px;
    text-align: center;
`;

const TextNum = styled.Text`
    font-size:50px;
    width:100px;
    text-align: center;
`;