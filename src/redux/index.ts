import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { reducer as postsReducer } from './posts';

// eslint-disable-next-line
// @ts-ignore
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true })) || compose;

const rootReducer = combineReducers({
  posts: postsReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export default store;
