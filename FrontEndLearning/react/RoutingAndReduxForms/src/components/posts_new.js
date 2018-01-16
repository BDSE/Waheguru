import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
    renderInput(field){
        return (
            <div className="form-group">
            <label>{field.title}</label>
                <input type={field.type} className="form-control" {...field.input}/>
            </div>
        )
    }
    
    render(){
        return(
            <form >
                <Field 
                    name="title" 
                    component={this.renderInput}
                    type="text"
                    title="Title"
                 />
               <Field 
                    name="title" 
                    component={this.renderInput}
                    type="text"
                    title="Tags"
                 />
                 <Field 
                    name="title" 
                    component={this.renderInput}
                    type="text"
                    title="Post Content"
                 />
            </form>
        )
    }
}



export default reduxForm({
    form: 'PostsNewForm' //should be a unique value
})(PostsNew);