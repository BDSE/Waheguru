/**
 * Read the comments on this page carefully to undestand the concepts..
 * Use the functional components which donot require to maintain a state and class componnets which require a state..here we hav only used the class components for the sake of learning.
 * Before starting a component always ask a question, that do we need to maintain state for this componnet
 * passing callback through props is a way to communicate from parent to child components, but its rare to use them for more than two levels deep, as it gets very confusing.
 * Callbacks are normally avoided, state and callbacks these things are handled with redux
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail'
// create a component. this should produce some html
// html inside the javascrpit is called jsx

const API_KEY = "AIzaSyBtcfdwOKJDjM0qI8RYaMRn87kCVAumn7k";

class App extends React.Component {
    //constructoe is used for initialization, setting the initial state.
    //state change that happens later say after an event occurss doesnt have the effect if state is somehow used in contructor, see the teststate property of this object
    //
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            test: "amar",
            selectedVideo: null,
            searchText: 'puppies'
        };
        this.handleYoutubeResults = this.handleYoutubeResults.bind(this);
        this.teststate = this.state.test;
        //this method makes a api call...
        //there is a question though, where should we make the search
        // react has a standard called =======>>>>>> DOWNWARD DATA FLOW ie: fetch data at the parent so we are doing it here.
        this.videoSearch(this.state.searchText);
    }

    videoSearch(searchText) {
        YTSearch({ key: API_KEY, term: searchText }, this.handleYoutubeResults);
    }

    handleYoutubeResults(videos) {
        this.setState({
            videos: videos,
            test: "sandhu",
            selectedVideo: videos[0]
        });
        console.log(this.state.videos);
    }
    render() {
        //this.teststate = this.state.test;
        const videoSearch = _.debounce((searchText) => { this.videoSearch(searchText) }, 500);
        return (
            <div>

                {this.teststate}
                <SearchBar setStateWithSearchTextChange={videoSearch}
                    onSearchTextChange={(searchText) => {
                        this.videoSearch(searchText);
                    }}
                    searchText={this.state.searchText}
                />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    obj={{ videos: this.state.videos, test: this.state.test }}
                    onVideoSelect={
                        (selectedVideo) => {
                            this.setState({ selectedVideo: selectedVideo })
                        }
                    }
                />
            </div>
        );
    }
}

// take this components generated html and put it on the page.
ReactDOM.render(<App></App>, document.querySelector('.container'));