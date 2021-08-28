import {ADD, ADD_NUM, SUB} from "../actions/actionTypes";

const initialState = {counter: 0};

function counter1(state=initialState, action) {

    switch (action.type) {
        case ADD:
            return {
                counter: state.counter + 1
            }
            break;
        case SUB:
            return {
                counter: state.counter - 1
            }
            break;
        case ADD_NUM:
            return {
                counter: state.counter + action.payload,
            }
        default:
            return state
    }
}

export default counter1;