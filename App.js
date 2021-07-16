import React, {useContext} from "react";
import styled from 'styled-components/native';
import { StoreProvider } from './src/context/storeContext'
import {InitializeWebsocket} from "./src/ws";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SubScreen from "./src/Screen/SubScreen";
import HomeScreen from "./src/Screen/HomeScreen";

const Stack = createStackNavigator();

export const WebsocketContext = React.createContext({
  handleWebsocketClose: () => {}
})

export default function App() {

  const {handleWebsocketClose} = InitializeWebsocket()
  const value = React.useMemo(() => ({handleWebsocketClose}), [handleWebsocketClose])

  return (
    <WebsocketContext.Provider value={value}>
      <StoreProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SubScreen" component={SubScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </StoreProvider>
    </WebsocketContext.Provider> 
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
