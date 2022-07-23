import {createSlice} from '@reduxjs/toolkit';

interface Error {
  id: number;
  message: string;
}

const initialState: Array<Error> = [];

const errorsSlice = createSlice({
  name: 'errors',
  initialState: initialState,
  reducers: {
    setError: (state, action) => {
      const errors = state;
      errors.push(action.payload);
      state = errors;
    },
  },
});

export const {setError} = errorsSlice.actions;

export default errorsSlice.reducer;
