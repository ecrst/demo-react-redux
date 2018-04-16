import {CLOSE_MODAL, OPEN_MODAL, SWITCH_MODAL, SIGN_IN_SUCCESS, SIGN_UP_SUCCESS} from '../actions';

const defaultState = {
    open: false,
}

export default function modalReducer(state = defaultState, action) {
    switch(action.type) {
        case CLOSE_MODAL:
        case SIGN_IN_SUCCESS:
        case SIGN_UP_SUCCESS:
            return defaultState;
        case OPEN_MODAL: 
            return {
                open: true,
                child: action.payload
            }
        case SWITCH_MODAL: 
            return {
                open: true,
                child: action.payload
            }
        default:
            return state;
    }
}


