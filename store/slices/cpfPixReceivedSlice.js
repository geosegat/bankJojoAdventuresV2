import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cpfPixReceived: '',
  namePixReceived: '',
};

const cpfPixReceivedSlice = createSlice({
  name: 'cpfPixReceived',
  initialState,
  reducers: {
    setCpfPixReceived(state, action) {
      state.cpfPixReceived = action.payload;
      console.log('To aqui dentro do slice', action.payload);
    },
    setNamePixReceived(state, action) {
      state.namePixReceived = action.payload;
      console.log('To no store', action.payload);
    },
  },
});

export const {setCpfPixReceived, setNamePixReceived} =
  cpfPixReceivedSlice.actions;
export default cpfPixReceivedSlice.reducer;
