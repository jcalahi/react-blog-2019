import React, { Component } from 'react';
import { connect } from 'react-redux';
// components
import UserHeader from './UserHeader';
// actions
import { fetchPostsAndUsers } from '../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
          <UserHeader id={post.userId} />
        </div>
      );
    });
  }

  render() {
    if (this.props.posts.length === 0) return null;

    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
