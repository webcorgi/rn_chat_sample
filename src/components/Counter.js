import React from 'react';
import styled from 'styled-components/native';
import { actions } from '../context/actions'
import { useSelector, useDispatch } from 'react-redux';


function Counter() {
    const dispatch = useDispatch();
    const { counter } = useSelector(state => state.counterReducer)

    const clickMinus = () => {
        dispatch(actions.decrease());
        dispatch(actions.counterText(true));
    }

    const clickPlus = () => {
        dispatch(actions.increase());
        dispatch(actions.counterText(true));
    }

    return (
        <Container>
            <BtnCount onPress={clickMinus}>
                <InnerText>-</InnerText>
            </BtnCount>
            
            <TextNum>{counter}</TextNum>
            
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