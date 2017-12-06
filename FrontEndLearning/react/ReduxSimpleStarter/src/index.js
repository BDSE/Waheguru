import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
// create a component. this should produce some html
// html inside the javascrpit is called jsx

const API_KEY = "AIzaSyBtcfdwOKJDjM0qI8RYaMRn87kCVAumn7k";

class App extends React.Component {
    //constructoe is used for initialization, setting the initial state.
    //state change that happens later say after an event occurss doesnt have the effect is state is somehow used in contructor, see the teststate property of this object
    //
    constructor(props) {
        super(props);

        this.state = { videos: [], test: "amar" };
        this.handleYoutubeResults = this.handleYoutubeResults.bind(this);
        this.teststate = this.state.test;
        //this method makes a api call...
        //there is a question though, where should we make the search
        // react has a standard called =======>>>>>> DOWNWARD DATA FLOW ie: fetch data at the parent so we are doing it here.
        YTSearch({ key: API_KEY, term: 'surfboards' }, this.handleYoutubeResults);
    }
    handleYoutubeResults(videos) {
        this.setState({ videos: videos, test: "sandhu" });
        console.log(this.state.videos);
    }
    render() {
        // this.teststate = this.state.test;
        return (
            <div>

                {this.teststate}
                <SearchBar />
                <VideoList obj={{ videos: this.state.videos, test: this.state.test }} />
            </div>
        )
    }
}

// take this components generated html and put it on the page.
ReactDOM.render(<App></App>, document.querySelector('.container'));