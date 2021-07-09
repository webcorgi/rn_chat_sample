/********************************************************
 * actionTypes : actions의 타입이름을 지정. 
 * 만드는 이유 : actions와 reducer 두군데에서 써야하기 때문에, 
 *              여기에서 변수를 만든 후 두 곳에 공통적으로 사용한다.
 *******************************************************/
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const IS_COUNTING = 'IS_COUNTING';


/********************************************************
 * actions : 상태를 업데이트할 용도의 함수를 제작
 *           ※ 실제 state 업데이트 동작은 reducer에서 처리하고, 
 *           actions에선
 *              1. 타입지정
 *              2. 파라미터 받아오기
 *           이 두가지만 '설정'한다.
 *******************************************************/

// type만 설정한 이유는, reducer에서 이 타입일 경우 실행할 동작을 설정해놓기 때문임.
const increase = (props) => (
    props.dispatch({
        type:INCREASE,
    })
);
const decrease = (props) => (
    props.dispatch({
        type:DECREASE,
    })
);

// 여기선 추가로 boolean 파라미터를 받음. 
// 그 이유는 true인지 false인지 체크해서 업데이트한 후에, 화면에 보이는 글자를 변경할 것이기 때문임 !
const counterText = (props, trueFalse) => (
    props.dispatch({
        type:IS_COUNTING,
        isCount:trueFalse
    })
);


// counterActions = 상위 함수
// counter에 관련된 모든 actions를 담는 상위 함수
const counterActions = (props) => {
    return {
        onIncrease:() => {
            increase(props);
        },
        onDecrease:() => {
            decrease(props);
        },
        changeCounterText:( trueFalse ) => {
            counterText(props, trueFalse);
        },
    }
}
/* 
const viewActions = (props) => {
    return {
    }
}
 */



/**
 * useActions = 최상위 actions 함수
 * 
 *  모든 함수를 담는 최상위 container 함수 !
 *     그래서 actions은
 *     최종container함수 > counter컨테이너함수 > counter함수의 구조를 가짐.
 */
export const useActions = (state, dispatch) => {
    return {
        counterActions: counterActions({state, dispatch}),
        // viewActions: viewActions({state, dispatch}),
    }
};



/********************************************************
 * state : UI에 실제로 보여주거나, 서버에 저장할 용도의 VALUE 초깃값을 설정
 *         이 값들은 모두 store에 들어가있고, action을 통해 변경된다.
 *******************************************************/
const counterStates = {
    counter:0,
    isCounter:false
}
/* 
const listStates = {
    text:'',
    list:[]
}
*/

export const initialState = {
    counterStates,
    // listStates
};


/********************************************************
 * Reducer : actions의 실제 동작을 지정하는 곳 (state의 값을 업데이트)
 *           리듀서는 store에 담아서, state와 actions을 사용할 수 있게 한다.
 *******************************************************/
const counterReducer = (state, action) => {
    switch (action.type) {
        /**
         * 상태 업데이트
         */
        case INCREASE:
            return{
                ...state,
                counter:state.counter + 1
            };
        case DECREASE:
            return{
                ...state,
                counter:state.counter - 1
            };
        case IS_COUNTING:
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
export const reducer = (state = initialState, action) => {
    return {
        counterStates: counterReducer(state.counterStates, action),
        // listStates: listReducer(state.listStates, action),
    }
};