import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import modalReducer from './modalReducer';
import signInReducer from './signInReducer';
import signUpReducer from './signUpReducer';


const rootReducer = combineReducers({
    modal: modalReducer,
    form: formReducer,
    signIn: signInReducer,
    signUp: signUpReducer
})

export default rootReducer