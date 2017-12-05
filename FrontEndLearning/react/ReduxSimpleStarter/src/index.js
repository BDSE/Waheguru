import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
// create a component. this should produce some html
// html inside the javascrpit is called jsx

const API_KEY = "AIzaSyAQ_nwLjiBGRV-Ci6gprcMjRWZpzziz5n0";

const App = function () {
    return <div>
        <SearchBar />
    </div>
}

// take this components generated html and put it on the page.
ReactDOM.render(<App></App>, document.querySelector('.container'));