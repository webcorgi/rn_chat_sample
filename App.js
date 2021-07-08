import React, {useContext} from "react";
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import Counter from './src/components/Counter';
import { StoreProvider } from './src/context/storeContext'
import CountingText from './src/components/CountingText'
import {InitializeWebsocket} from "./src/ws";
/**
 * StoreProvider = Store를 최상위에 등록함.
 * contextAPI 라는 이름 그대로 상태(state)를 API처럼 전역 어디서든 쓸 수 있게 한다.
 * 
 * components폴더에서 실제사용법 확인하면 됨.
 */

export const WebsocketContext = React.createContext({
  handleWebsocketClose: () => {}
})


export default function App() {

  const {handleWebsocketClose} = InitializeWebsocket()
  const value = React.useMemo(() => ({handleWebsocketClose}), [handleWebsocketClose])

  return (
    <>
    <StatusBar style="auto" />

    <WebsocketContext.Provider value={value}>
      <StoreProvider>
        <Container>
          <CountingText />
          <Counter />
        </Container>
      </StoreProvider>
    </WebsocketContext.Provider>
    </>
  );
}


/*********************************************************
* styling
*********************************************************/

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;
