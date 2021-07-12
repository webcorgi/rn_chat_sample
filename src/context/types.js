/********************************************************
 * actionTypes : actions의 타입이름을 지정. 
 * 만드는 이유 : actions와 reducer 두군데에서 써야하기 때문에, 
 *              여기에서 변수를 만든 후 두 곳에 공통적으로 사용한다.
 *******************************************************/
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const IS_COUNTING = 'counter/IS_COUNTING';

export const types = { 
    INCREASE,
    DECREASE,
    IS_COUNTING
}