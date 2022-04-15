import React from 'react';
import { PostsList } from './index';
import { shallow } from 'enzyme';

describe('PostList component', () => {
  it('should render posts and call getPostsAction', () => {
    const postList = require('./test-data.json');
    const getPostsActionMock = jest.fn();
    const removePostMock = jest.fn();
    const postsState = {
      postList
    };

    const wrapper = shallow(<PostsList getPostsAction={getPostsActionMock} removePost={removePostMock} postsState={postsState} />);

    expect(getPostsActionMock).toHaveBeenCalled();
    expect(wrapper.find('.post').length).toBe(2);

    const firstPost = wrapper.find('.post').first();
    const { title, body, userId } = postList[0];

    expect(firstPost.find('.post__title').text()).toBe(title);
    expect(firstPost.find('.post__body').text()).toBe(body);
    expect(firstPost.find('.post__user').text()).toBe(`by User id: ${userId}`);

    firstPost.simulate('click');
    expect(removePostMock).toHaveBeenCalled();
  });

  it('should render message when no posts available', () => {
    const postsState = {
      postList: []
    };

    const wrapper = shallow(<PostsList getPostsAction={() => {}} removePost={() => {}} postsState={postsState} />);

    expect(wrapper.find('.post__empty-msg').text()).toBe('Sorry, no posts yet');
  });
});
