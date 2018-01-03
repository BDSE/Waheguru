import React, { Component } from 'react';

//this is a functional component
// const SearchBar =  function(){
//     return <input />
// }

//class based component

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { searchText: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input onChange={this.onInputChange.bind(this)} />
                value of input: {this.props.searchText}
            </div>
        );
    }
    onInputChange(event) {

        var target = event.target;
        this.props.setStateWithSearchTextChange(target.value); //call new search....see index.js
    }
}

export default SearchBar;