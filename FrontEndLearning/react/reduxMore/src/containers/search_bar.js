import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDataFromApi } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
        //this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchDataFromApi(this.state.searchTerm);
        this.setState({ searchTerm: '' });
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input className="search-bar form-control" placeholder="Get a five day forecast" value={this.state.searchTerm} onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form >
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchDataFromApi }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);