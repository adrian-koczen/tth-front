import {createSlice} from '@reduxjs/toolkit';

interface State {
  loading: boolean;
  authToken: string | null;
}

const initialState: State = {
  loading: true,
  authToken: null,
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: initialState,
  reducers: {
    verifyToken: state => {
      console.log('verify token slice');
      state.authToken = 'authToken';
      state.loading = false;
    },
  },
});

export const {verifyToken} = authorizationSlice.actions;

export default authorizationSlice.reducer;
