import {types} from './types'

export const increase = () => ({
    type:types.INCREASE,
});
export const decrease = () => ({
    type:types.DECREASE,
});
export const counterText = (trueFalse) => ({
    type:types.IS_COUNTING,
    isCount:trueFalse
});

export const actions = {
    increase,
    decrease,
    counterText,
}