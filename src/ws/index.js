import React, {useCallback, useEffect} from 'react';
import {StoreContext} from "../context/storeContext";
import useWebSocket, {ReadyState} from "react-native-use-websocket";

export const InitializeWebsocket = () => {
    const {state, actions} = React.useContext(StoreContext)

    // ws://localhost:8081/api/v1/ws
    const {sendMessage, lastMessage, readyState, getWebSocket} = useWebSocket("ws://localhost:8081/api/v1/ws", { // connection testURL =>  wss://echo.websocket.org
        shouldReconnect: (closeEvent) => true,
        reconnectAttempts: 10,
        reconnectInterval: 5000,
    });

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    useEffect(() => {
        if (connectionStatus === 'Open') {
            console.log('opened');
        }else{
            console.log('is open ?');
        }
    }, [connectionStatus])

    const handleWebsocketClose = useCallback(() => {
        getWebSocket().close()
    }, []);


    return {sendMessage, lastMessage, readyState, getWebSocket, handleWebsocketClose}
}