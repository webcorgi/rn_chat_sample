import {types} from './types'
import {states} from './states'
import { combineReducers } from 'redux';

const counterReducer = (state = states.counterState, action) => {
    switch (action.type) {
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


export const reducers = combineReducers({
    counterReducer,
})
