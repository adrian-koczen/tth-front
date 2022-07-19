import {createSlice} from '@reduxjs/toolkit';

interface Error {
  id: number;
  message: string;
}

const initialState: Array<Error> = [
  {id: 0, message: 'Hello error'},
  {id: 1, message: 'Hello error 2'},
];

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
