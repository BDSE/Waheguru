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
        this.onInputChange = this.onInputChange.bind(this)
    }
    render() {
        return (
            <div>
                <input value={this.state.searchText} onChange={this.onInputChange} />
                value of input: {this.state.searchText}
            </div>
        );
    }
    onInputChange(event) {
        this.setState({ searchText: event.target.value })
    }
}

export default SearchBar;