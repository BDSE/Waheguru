
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{

    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                key= {book.title}
                className="list-group-item"
                onClick = {() => {this.props.selectBook(book)}}>
                {book.title}
                </li>
            );
        });
    }
    render(){
        return(
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    //whatever is returned from here will show up as props inside BookList
    return {
        books: state.books
    };
}

//anything returned from this function will end up in props, same as mapStateToProps
function mapDispatchToProps(dispatch){
    //whenever selectBook is called the result should be passed
    // to all our reducers
    return bindActionCreators({selectBook:selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);