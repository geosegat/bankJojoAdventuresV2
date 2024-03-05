import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cpf: '',
};

const cpfSlice = createSlice({
  name: 'cpf',
  initialState,
  reducers: {
    setCpf(state, action) {
      state.cpf = action.payload;
    },
  },
});

export const {setCpf} = cpfSlice.actions;
export default cpfSlice.reducer;
