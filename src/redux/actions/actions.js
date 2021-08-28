import {ADD, ADD2, ADD_NUM, SUB} from "./actionTypes";

export function add() {
    return {
        type: ADD
    }
}

export function add_num(number) {
    return {
        type: ADD_NUM,
        payload: number
    }
}

export function add2(number) {
    return {
        type: ADD2,
        payload: number
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function asyncAdd(number) {
    return dispatch => {
        setTimeout(() => {
            dispatch(add_num(number))
        }, 3000)
    }
}