import React from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';

export default function SignUpFormView(props) {
    const {handleSubmit, submitting, invalid, pristine} = props;
    function handleSwitch(e) {
        props.switchModal('Sign In');
    }
    
    return (
        <form className="form sign-up-form" onClick={e => e.stopPropagation()} onSubmit={handleSubmit(props.onSubmit)}>

            <Field name="username" label="Username" type="text" component={renderField} />
            <Field name="email" label="Email" type="text" component={renderField} />
            <Field name="password" label="Password" type="password" component={renderField} />
            <Field name="repeatPassword" label="Repeat Password" type="password" component={renderField} />

            <button type="submit" disabled={submitting || invalid} className="form-submit-button">Submit</button>
            <button type="button" className="form-submit-button" onClick={props.onSwitch} >Sign In</button>

        </form>
    )
}

function renderField(field) {
    const {touched, error} = field.meta;
    const className = `sign-up-form-input ${touched && error ? 'input-has-error' : ''}`
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
