import React from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';

export default function LoginFormView(props) {
    const {handleSubmit, submitting, invalid, signInPending, error} = props;
    return (
        <form className="form login-form" onClick={e => e.stopPropagation()} onSubmit={handleSubmit(props.onSubmit)}>

            <Field name="login" label="Login" type="text" component={renderField} />
            <Field name="password" label="Password" type="password" component={renderField} />
            {error && 
                <div className="form-error-message">
                    {error}
                </div>}
            <button type="submit" disabled={submitting || invalid || signInPending} className="form-submit-button">Submit</button>
            <button type="button" className="form-submit-button" onClick={props.onSwitch}>Sign Up</button>

        </form>
    )
}

function renderField(field) {
    const {touched, error} = field.meta;
    const className = `login-form-input ${touched && error ? 'input-has-error' : ''}`
    return (
        <div>
            <label>{field.label}</label>
            <input
                className={className}
                type={field.type}
                {...field.input}
            />
            <div className="form-error-message">
                {touched && error}
            </div>
        </div>
    )
}

