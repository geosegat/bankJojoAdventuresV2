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
    },
    setNamePixReceived(state, action) {
      state.namePixReceived = action.payload;
    },
  },
});

export const {setCpfPixReceived, setNamePixReceived} =
  cpfPixReceivedSlice.actions;
export default cpfPixReceivedSlice.reducer;
