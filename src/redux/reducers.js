import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  buttonLoading: false,
  userSession: false,
  userInfo: {},
  userLocation: {},
  userLocationHistory: [],
};

const Slice = createSlice({
  name: 'heatmotion',
  initialState,
  reducers: {
    changeButtonLoading: (state, action) => {
      state.buttonLoading = action.payload;
    },
    changeUserSession: (state, action) => {
      state.userSession = action.payload;
    },
    addUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    changeUserLocation: (state, action) => {
      state.userLocation = action.payload;
    },
    changeUserLocationHistory: (state, action) => {
      state.userLocationHistory = action.payload;
    },
  },
});

export const {
  changeButtonLoading,
  addUserInfo,
  changeUserLocation,
  changeUserSession,
  changeUserLocationHistory,
} = Slice.actions;
export default Slice.reducer;
