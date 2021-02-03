import React, { Component } from "react";
import { fetchPosts } from "../redux/actions/action";
import { connect } from "react-redux";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    console.log(posts);

    const postitems = posts.map((post) => {
      return (
        <div key={post.id} className="card">
          <h2>{post.title}</h2>
        </div>
      );
    });
    return (
      <div>
        <h3>WELCOME TO REDUX</h3>
        {postitems}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

// CONNECT TO REDUX

export default connect(mapStateToProps, { fetchPosts })(Posts);
