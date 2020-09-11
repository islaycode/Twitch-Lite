import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

export class StreamForm extends Component {

    renderError=({error,touched})=>{
        if(touched && error){
            return(
            <div className="ui error message">
                <div className="header">{error}</div>
            </div>
            )
        }
    }
    renderForm=(formProps)=> {
        return (
            <div className="field">
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off" />
                {this.renderError(formProps.meta)}

            </div>
        )
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }
    render() {
        return (
            <>
        
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderForm} label="Title" />
                <Field name="description" component={this.renderForm} label="Description" />
                <button className="ui primary button">Submit</button>
            </form>
            </>
        )
    }
}
const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title'
    }

    if (!formValues.description) {
        errors.description = 'You must enter a Description'
    }

    return errors;
}
export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);

