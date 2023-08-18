import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  buttonLoading: false,
  userInfo: {},
};

const Slice = createSlice({
  name: 'heatmotion',
  initialState,
  reducers: {
    changeButtonLoading: (state, action) => {
      state.buttonLoading = action.payload;
    },
    addUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const {changeButtonLoading, addUserInfo} = Slice.actions;
export default Slice.reducer;
