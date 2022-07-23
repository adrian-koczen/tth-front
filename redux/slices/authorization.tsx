import {createSlice} from '@reduxjs/toolkit';

interface State {
  authorized: boolean;
  emailVerify: {
    state: boolean;
    username: string;
  };
}

const initialState: State = {
  authorized: false,
  emailVerify: {
    state: false,
    username: '',
  },
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: initialState,
  reducers: {
    setAuthorized: (state, action: {payload: boolean; type: string}) => {
      const isAuthorized = action.payload;
      state.authorized = isAuthorized;
    },
    setEmailVerified: (state, action: {payload: string; type: string}) => {
      const username = action.payload;
      state.emailVerify = {
        state: true,
        username: username,
      };
    },
    completeEmailVerified: (
      state,
      action: {payload: boolean; type: string},
    ) => {
      state.emailVerify = {
        state: action.payload,
        username: '',
      };
      state.authorized = true;
    },
  },
});

export const {setAuthorized, setEmailVerified, completeEmailVerified} =
  authorizationSlice.actions;

export default authorizationSlice.reducer;
