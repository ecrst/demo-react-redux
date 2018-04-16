import { SIGN_UP_FAIL, SIGN_UP_SUCCESS, SIGN_UP_PENDING } from '../actions';


const defaultState = {
    signUpPending: false,
    signUpError: '',
}

export default function signUp(state = defaultState, action) {
    switch(action.type) {
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                signUpError: '',
            }
        case SIGN_UP_FAIL: 
            return {
                ...state,
                signUpError: action.payload
            }
        case SIGN_UP_PENDING: 
            return {
                ...state,
                signUpPending: action.payload
            }
        default:
            return state;
    }
}
