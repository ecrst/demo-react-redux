import { SIGN_IN_FAIL, SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS, SIGN_OUT_FAIL, SIGN_IN_PENDING } from '../actions';
const user = {
    userName: '1',
    firstName: 'Stepan',
    lastName: '',
    email: 'stepa@mail.ru',  
    password: ''
  }

const defaultState = {
    isLogged: false,
    signInPending: false,
    signInError: '',
}

export default function signIn(state = defaultState, action) {
    switch(action.type) {
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                isLogged: true,
                user: action.payload,
                signInError: '',
            }
        case SIGN_IN_FAIL: 
            return {
                ...state,
                isLogged: false,
                signInError: action.payload
            }
        case SIGN_IN_PENDING: 
            return {
                ...state,
                signInPending: action.payload
            }
        case SIGN_OUT_SUCCESS:
            return defaultState
        case SIGN_OUT_FAIL:
            return state
        default:
            return state;
    }
}
