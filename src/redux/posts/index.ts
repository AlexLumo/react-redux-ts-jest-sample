import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '..';

export const GET_POSTS = 'GET_POSTS';
export const REMOVE_POST = 'REMOVE_POST';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface GetPostsAction {
  type: typeof GET_POSTS;
  payload: Post[];
}

export interface RemovePostAction {
  type: typeof REMOVE_POST;
  payload: number;
}

export type PostsState = {
  postList: Post[];
};

export type PostActionTypes = GetPostsAction | RemovePostAction;

const initialState: PostsState = {
  postList: []
};

const reducer = (state = initialState, action: PostActionTypes): PostsState => {
  switch (action.type) {
    case GET_POSTS:
      return { postList: [...action.payload.slice(0, 10)] };
    case REMOVE_POST:
      return { postList: [...state.postList.filter(({ id }) => id !== action.payload)] };
    default:
      return state;
  }
};

const getPlainPostAction = async (dispatch: ThunkDispatch<RootState, unknown, PostActionTypes>) => {
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
  dispatch({
    type: GET_POSTS,
    payload: posts.data
  });
};

const getPostsAction = (): ThunkAction<void, RootState, unknown, PostActionTypes> => getPlainPostAction;

const removePost = (id: number) => {
  return {
    type: REMOVE_POST,
    payload: id
  };
};

export { reducer, getPostsAction, removePost, getPlainPostAction };
