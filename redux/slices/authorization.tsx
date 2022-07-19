import {createSlice} from '@reduxjs/toolkit';

interface State {
  authorized: boolean;
}

const initialState: State = {
  authorized: false,
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: initialState,
  reducers: {
    setAuthorized: (state, action: {payload: boolean; type: string}) => {
      const isAuthorized = action.payload;
      state.authorized = isAuthorized;
    },
  },
});

export const {setAuthorized} = authorizationSlice.actions;

export default authorizationSlice.reducer;
