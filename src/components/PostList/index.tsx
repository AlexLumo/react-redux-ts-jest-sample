import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux';
import { PostsState } from '../../redux/posts';
import { getPostsAction, removePost } from '../../redux/posts';

interface Props {
  postsState: PostsState;
  getPostsAction: () => void;
  removePost: (id: number) => void;
}

export class PostsList extends React.Component<Props> {
  componentDidMount() {
    this.props.getPostsAction();
  }

  render() {
    return <div>{this.renderPosts()}</div>;
  }

  renderPosts() {
    if (!this.props.postsState.postList.length) {
      return <p>Sorry, no posts yet</p>;
    }

    return this.props.postsState.postList.map(({ id, userId, title, body }) => {
      return (
        <div className="post" key={id} onClick={() => this.removePostHandler(id)}>
          <h2 className="post__title">{title}</h2>
          <p className="post__body">{body}</p>
          <p className="post__user">by User id: {userId}</p>
          <hr></hr>
        </div>
      );
    });
  }

  removePostHandler = (id: number) => {
    this.props.removePost(id);
  };
}

const mapStateToProps = (rootState: RootState) => {
  return { postsState: rootState.posts };
};

export default connect(mapStateToProps, { getPostsAction, removePost })(PostsList);
