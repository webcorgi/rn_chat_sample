import { types } from './types';

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
        type:types.INCREASE,
    })
);
const decrease = (props) => (
    props.dispatch({
        type:types.DECREASE,
    })
);

// 여기선 추가로 boolean 파라미터를 받음. 
// 그 이유는 true인지 false인지 체크해서 업데이트한 후에, 화면에 보이는 글자를 변경할 것이기 때문임 !
const counterText = (props, trueFalse) => (
    props.dispatch({
        type:types.IS_COUNTING,
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

