import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
    constructor(props){
        super(props)
    }
    render(){
        if(!this.props.book){
            return (<div>Select a book</div>)
        }
        return (
            <div className="bookDetail"> {this.props.book.title}</div>
        );
    }
}

function mapStateToState(state){
    console.log("app state", state);
    return {
        book : state.activeBook
    }
}

export default connect(mapStateToState)(BookDetail);