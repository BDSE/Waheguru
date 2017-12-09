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
        this.onInputChange = this.onInputChange.bind(this);;
    }

    render() {
        return (
            <div className="search-bar">
                <input onChange={this.onInputChange} />
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