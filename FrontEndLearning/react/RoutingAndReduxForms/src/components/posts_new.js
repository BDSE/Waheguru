import React, { Component } from 'react';
import { Field, reduxForm, values } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {

    renderInput(field) {
        console.log("feild: ", field);
        const classname = `form-group ${field.meta.error && field.meta.touched ? 'has-danger' : ''}`;
        return (
            <div className={classname}>
                <label>{field.title}</label>
                <input type={field.type} className="form-control" {...field.input} />
                <div className="text-help">
                    {field.meta.error && field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    }

    handleSubmit(values) {
        console.log(values);
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        console.log("post_new props: ",this.props);
        const handleSubmitThisFunctionIsProvidedByReduxForm = this.props.handleSubmit;
        return (
            <form onSubmit={handleSubmitThisFunctionIsProvidedByReduxForm(this.handleSubmit.bind(this))} className="form-group">
                <Field
                    name="title"
                    component={this.renderInput}
                    type="text"
                    title="Title"
                />
                <Field
                    name="categories"
                    component={this.renderInput}
                    type="text"
                    title="categories"
                />
                <Field
                    name="content"
                    component={this.renderInput}
                    type="checkbox"
                    title="Post Content"
                />
                <button type="submit" className="btn btn-primary">submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    console.log("values passed to validate function:", values);
    let errors = {}

    if (!values.title) {
        errors.title = 'Please enter a title';
    }
    if (!values.categories) {
        errors.categories = 'Please enter a category';
    }
    if (!values.content) {
        errors.content = 'Please enter some content';
    }

    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'PostsNewForm' //should be a unique value
})(
    connect(null, { createPost })(PostsNew)
    );