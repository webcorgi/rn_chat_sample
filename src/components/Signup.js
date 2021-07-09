import React, {useState, useContext, useCallback} from 'react';
import {StoreContext} from "../context/storeContext";
import styled from 'styled-components/native';
import { AuthSignup } from '../utils/auth';
import {InitializeWebsocket} from "../ws";


function Signup() {
    // 전역 어디서든 아래의 소스로 state, actions를 가져와 사용하면 끝.
    const {state, actions} = useContext(StoreContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const {sendMessage} = InitializeWebsocket();
    
    const clickSignup = () => {
        sendMessage(
            JSON.stringify( AuthSignup(name, email, pwd) )
        )
    }

    return (
        <Container>
            <MsgWrapper>
                <Title>
                    ChattingApp
                </Title>
            </MsgWrapper>
            <FormWrapper>
                <InputCommon 
                    onChangeText={setName}
                    value={name}
                    placeholder="NAME"
                />
                <InputCommon 
                    onChangeText={setEmail}
                    value={email}
                    placeholder="EMAIL"
                />
                <InputCommon 
                    onChangeText={setPwd}
                    value={pwd}
                    placeholder="PASSWORD"
                />

                <BtnOuter>
                    <BtnInner 
                        title="SIGN UP"
                        color="#f194ff"
                        onPress={clickSignup}
                    />
                </BtnOuter>
            </FormWrapper>
        </Container>
    );
}

export default Signup;

/*********************************************************
* styling
*********************************************************/
const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
    width:100%;
    background:#fff;
`;

const MsgWrapper = styled.View`
    flex:0.4;
    justify-content: flex-end;
    align-items: center;
    width:100%;
    padding-bottom:50px;
`;

const Title = styled.Text`
    font-size:40px;    
    font-weight:100;
`;

const FormWrapper = styled.View`
    flex:0.6;
    justify-content: flex-start;
    align-items: center;
    width:100%;
`;

const InputCommon = styled.TextInput`
    width:60%;
    height:40px;
    background:#fff;
    padding-left:10px;
    margin-bottom:20px;
    border-radius: 5px;
    border:1px solid #f194ff;
`;

const BtnOuter = styled.View`
    width:60%;
    height:80px;
    `;

const BtnInner = styled.Button`
    color:#fff;
    height:150px;
`;