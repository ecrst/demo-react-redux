import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

import LoginFormView from '../views/LoginFormView'
import '../../styles/form.css';
import { signIn, switchModal } from '../../actions'

const LoginForm = props =>  {


    function onSubmit(values) {
        return props.signIn(values).then((a) => {
           if (props.signInError) {
               throw new SubmissionError({
                   _error: props.signInError
               })
           }
       })
    }

        return (
            <LoginFormView {...props} onSubmit={onSubmit} onSwitch={() => props.switchModal('Sign Up')} />
        )

} 

function validate(values) {
    const errors = {};

    if (!values.login) {
        errors.login = "Enter login!"
    }
    if (!values.password) {
        errors.password = "Enter password!"
    }
    return errors;
}

function mapStateToProps({signIn : {signInPending, signInError}}) {
    return {signInPending, signInError}
}

export default reduxForm({
    validate,
    form: 'LoginForm'
})(
    connect(mapStateToProps, {signIn, switchModal})(LoginForm)
)