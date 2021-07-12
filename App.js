import React, {useContext} from "react";
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import Counter from './src/components/Counter';
import CountingText from './src/components/CountingText'
import Signup from './src/components/Signup'
import {InitializeWebsocket} from "./src/ws";
import { Provider } from 'react-redux'; // redux를 API화 시켜줄 객체
import { createStore } from 'redux'; // store 생성객체
import { reducers } from './src/context/reducers'; // store에 담을 reducer
import { composeWithDevTools } from 'redux-devtools-extension'; // 개발도구


export const WebsocketContext = React.createContext({
  handleWebsocketClose: () => {}
})

export default function App() {

  // websocket
  const {handleWebsocketClose} = InitializeWebsocket()
  const value = React.useMemo(() => ({handleWebsocketClose}), [handleWebsocketClose])

  // redux
  const store = createStore(reducers, composeWithDevTools() );
  console.log(store.getState());
  window.store = store; // console에서 확인 가능해짐

  return (
    <>
    <StatusBar style="auto" />

    <WebsocketContext.Provider value={value}>
      <Provider store={store}>
        <Container>
          <CountingText />
          <Counter />
          {/* <Signup /> */}
        </Container>
      </Provider>
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
