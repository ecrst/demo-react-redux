import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

import SignUpFormView from '../views/SignUpFormView'
import '../../styles/form.css';
import { signUp, switchModal } from '../../actions'

const SignUpForm = props => {
    function onSubmit(values) {
        props.signUp(values).then(() => {
            if (props.signUpError) {
                throw new SubmissionError({

                })
            }
        });
    }

    return <SignUpFormView {...props} onSubmit={onSubmit} onSwitch={() => props.switchModal('Sign In')} />
}

function validate(values) {
    const errors = {};
    const {username, email, password, repeatPassword} = values;
    if (!username) {
        errors.username = "Enter login!"
    } else if (!username.match(/\w{3,}/)) {
        errors.username = "At least 3 characters"
    } else if (!username.match(/\w{1,11}/)) {
        errors.username = "No more 11 characters"
    }
    if (!email) {
        errors.email = "Enter email!"
    } else if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        errors.email = "Enter valid email!"
    }
    if (!password) {
        errors.password = "Enter password!"
    } else if (!repeatPassword || (password !== repeatPassword)) {
        let er = "Passwords does not match!"
        errors.password = er;
        errors.repeatPassword = er;
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'SignUpForm'
})(
    connect(null, {signUp, switchModal})(SignUpForm)
)