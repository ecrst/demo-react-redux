import axios from 'axios';
import {SubmissionError} from 'redux-form';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SWITCH_MODAL = 'SWITCH_MODAL';

export function openModal(child) {
    return {
        type: OPEN_MODAL,
        payload: child
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}

export function switchModal(child) {
    return {
        type: SWITCH_MODAL,
        payload: child
    }
}

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAIL = 'SIGN_IN_FAIL';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT';
export const SIGN_OUT_FAIL = 'SIGN_OUT';
export const SIGN_IN_PENDING = 'SIGN_IN_PENDING';

export const SIGN_UP_PENDING = 'SIGN_UP_PENDING';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL';

const url = 'http://localhost:3000/'

export function signIn(values) {
    const request = axios.post(`${url}signin`, values);
    return dispatch => {
        dispatch({type: SIGN_IN_PENDING, payload: true})
        return request
        .then(response => {
            if(response.data.success) {
                return dispatch({
                    type: SIGN_IN_SUCCESS,
                    payload: response.data.description
                }) 
            } else {
                return dispatch({
                    type: SIGN_IN_FAIL,
                    payload: response.data.description
                })
            }
        })
        .catch(error => dispatch({
            type: SIGN_IN_FAIL,
            payload: 'Something went wrong...'
        }))
        .then(() => dispatch({type: SIGN_IN_PENDING, payload: false}))
    }
}

export function signUp(values) {
    const request = axios.post(`${url}signup`, values);

    return dispatch => {
        dispatch({type: SIGN_UP_PENDING, payload: true})
        return request
        .then(response => {
            if(response.data.success) {
                return dispatch({
                    type: SIGN_UP_SUCCESS,
                }) 
            } else {
                return dispatch({
                    type: SIGN_UP_FAIL,
                    payload: response.data.description
                }) 
            }
        })
        .catch(error => dispatch({
            type: SIGN_UP_FAIL,
            payload: 'Something went wrong...'
        }))
        .then(() => dispatch({type: SIGN_UP_PENDING, payload: false}))
    }
}

export function signOut() {
    const request = axios.get(`${url}signout`);

    return dispatch => {
        return  request
            .then(response => {
                if(response.data.success) {
                    return dispatch({
                        type: SIGN_OUT_SUCCESS
                    })
                } else {
                    return dispatch({
                        type: SIGN_OUT_FAIL,
                        payload: response.data.description
                    })
                }
            })
            .catch(error => dispatch({
                type: SIGN_OUT_FAIL,
                payload: 'Something went wrong...'
            }))
    }
}