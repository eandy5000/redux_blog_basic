import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map( (post) => {
            return (
                <li key={post.id}>
                    <Link to={('posts/' + post.id)} >
                    <h4>Title: {post.title}</h4>
                    <p><strong>Categories:</strong> {post.categories}</p>
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <h6>All the posts</h6>
                <ul>
                    { this.renderPosts() }
                </ul>
            </div>);
    }
    
}

function mapStateToProps(state) {
    return {
        posts: state.posts.all
    };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
