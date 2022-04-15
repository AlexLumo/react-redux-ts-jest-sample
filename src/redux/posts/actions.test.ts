import axios from 'axios';
import { getPostsAction } from './index';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Actions and reducers behavior', () => {
  it('should call dispatch with correct action', async () => {
    const testPosts = require('./test-data.json');
    mockedAxios.get.mockResolvedValue({ data: testPosts });

    const dispatchMock = jest.fn();

    await getPostsAction()(dispatchMock, () => ({ posts: { postList: [] } }), null);

    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'GET_POSTS',
      payload: testPosts
    });
  });
});
