import {states} from "./states";
import {reducers} from "./reducers";
import {useActions} from "./useActions";
import React, {createContext, useEffect, useReducer} from "react";

const StoreContext = createContext(states);

const StoreProvider = ({children}) => {
    
    // 모든 컴포넌트에서 쓸수 있도록 구독
    const [state, dispatch] = useReducer(reducers, states);
    const actions = useActions(state, dispatch);

    // state가 변할때마다 console.log로 확인
    useEffect(() => console.log(states), [states])

    return (
        <StoreContext.Provider value={{state, dispatch, actions}}>
            {children}
        </StoreContext.Provider>
    );
};

export {StoreContext, StoreProvider};