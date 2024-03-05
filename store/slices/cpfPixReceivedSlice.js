import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cpfPixReceived: '',
  namePixReceived: '',
  valuePixReceived: 0,
};

const cpfPixReceivedSlice = createSlice({
  name: 'cpfPixReceived',
  initialState,
  reducers: {
    setCpfPixReceived(state, action) {
      state.cpfPixReceived = action.payload;
    },
    setNamePixReceived(state, action) {
      state.namePixReceived = action.payload;
    },
    setValuePixReceived(state, action) {
      state.valuePixReceived = action.payload;
    },
  },
});

export const {setCpfPixReceived, setNamePixReceived, setValuePixReceived} =
  cpfPixReceivedSlice.actions;
export default cpfPixReceivedSlice.reducer;
