import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostShow extends Component {
    componentDidMount() {
        console.log("componentDidMount......",this.props.post);
            this.props.fetchPost(this.props.match.params.id);
    }
    onDeleteClick(){
        const id = this.props.match.params.id
        this.props.deletePost(id, () => {
            this.props.history.push("/")
        })
    }

    render() {
        console.log("render........",this.props.post);
        if (!this.props.post) {
            return (
                <div>....loading</div>
            )
        }
        return (
            <div>
                <Link to="/">Home page</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
                <h1>{this.props.post.title}</h1>
                <h3>{this.props.post.categories}</h3>
                <h6>{this.props.post.content}</h6>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        post: state.posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchPost , deletePost })(PostShow);