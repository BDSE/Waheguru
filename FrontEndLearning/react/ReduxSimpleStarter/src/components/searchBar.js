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
            <div>
                <input onChange={this.onInputChange.bind(this)} />
                value of input: {this.state.searchText}
            </div>
        );
    }
    onInputChange(event) {
        this.setState({ searchText: event.target.value })
    }
}

export default SearchBar;