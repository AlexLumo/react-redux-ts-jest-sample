import React from 'react';
import { connect } from 'react-redux';
import { removePost } from '../../redux/posts';

interface Props {
  removePost: (id: number) => void;
}

class MagicButton extends React.Component<Props> {
  render() {
    return <a href="#">Remove random post</a>;
  }

  clickHandler = () => {
    const postId = Math.floor(Math.random() * 10);
    this.props.removePost(postId);
  };
}

export default connect(null, { removePost })(MagicButton);
