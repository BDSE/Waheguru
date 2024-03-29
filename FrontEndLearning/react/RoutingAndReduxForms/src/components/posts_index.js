import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import TestComponent from './test';
import _ from 'lodash';

class PostsIndex extends Component{

    componentDidMount(){
        console.log("compnent did mount from post_index");
        this.props.fetchPosts();
    }

    renderPosts(){
       let jsxArr =  _.map(this.props.posts, (post) => {
          return (
              <li className="list-group-item" key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </li>  
          )
        })

        return jsxArr;

    //     let postsArr = [];
    //     for(const index in this.props.posts){
    //         postsArr.push(<li className="list-group-item" key={this.props.posts[index].id}>{this.props.posts[index].title}</li>)
    //    }
    //    return postsArr;
    }

    render(){
        console.log(this.props.posts);
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">Add a post</Link>
                </div>
                <p>Home Page</p>
                <ul className="list-group">{this.renderPosts()}</ul>
                <TestComponent />
            </div>
        )
    }
}

function mapStateToProps(state){
 return {
     posts: state.posts
 }
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);