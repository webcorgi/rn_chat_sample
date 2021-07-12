import { types } from './types'
import { states } from './states'

/********************************************************
 * Reducer : actions의 실제 동작을 지정하는 곳 (state의 값을 업데이트)
 *           리듀서는 store에 담아서, state와 actions을 사용할 수 있게 한다.
 *******************************************************/
const counterReducer = (state, action) => {
    switch (action.type) {
        /**
         * 상태 업데이트
         */
        case types.INCREASE:
            return{
                ...state,
                counter:state.counter + 1
            };
        case types.DECREASE:
            return{
                ...state,
                counter:state.counter - 1
            };
        case types.IS_COUNTING:
            return{
                ...state,
                isCounter:state.isCount
            };
        default:
            return state; // 기본 값 설정. 파라미터가 undefiend인 경우를 대비
    }
}

/* 
const listReducer = (state, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
}
*/


// 최상위 리듀서. 이 리듀서를 store가 구독한다.
export const reducers = (state = states, action) => {
    return {
        counterStates: counterReducer(state.counterStates, action),
        // listStates: listReducer(state.listStates, action),
    }
};