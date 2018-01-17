import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostShow extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }
    render() {
        if (!this.props.post) {
            return (
                <div>....loading</div>
            )
        }
        return (
            <div>
                <h6>{this.props.post.title}</h6>
                <h3>{this.props.post.category}</h3>
                <h1>{this.props.post.content}</h1>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        post: state.posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchPost })(PostShow);