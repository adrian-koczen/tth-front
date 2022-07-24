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
    setError: (state, action: {payload: string}) => {
      const errors = state;
      const newError = {
        id: errors.length + 1,
        message: action.payload,
      };
      errors.push(newError);
      state = errors;
    },
  },
});

export const {setError} = errorsSlice.actions;

export default errorsSlice.reducer;
