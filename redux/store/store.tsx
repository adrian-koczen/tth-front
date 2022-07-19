import {configureStore} from '@reduxjs/toolkit';
const createDebugger = require('redux-flipper').default;
import authorization from 'redux/slices/authorization';
import errors from 'redux/slices/errors';

export const store = configureStore({
  reducer: {authorization: authorization, errors: errors},
  middleware: getDefaultMiddleware =>
    __DEV__
      ? getDefaultMiddleware({serializableCheck: false}).concat(
          createDebugger(),
        )
      : getDefaultMiddleware({
          serializableCheck: false,
        }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
