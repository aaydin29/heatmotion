import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  buttonLoading: false,
  userInfo: {},
  userLocation: {},
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
    changeUserLocation: (state, action) => {
      state.userLocation = action.payload;
    },
  },
});

export const {changeButtonLoading, addUserInfo, changeUserLocation} =
  Slice.actions;
export default Slice.reducer;
