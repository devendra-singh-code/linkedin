import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  businessBtn: false,
  profileBtn: false,
  messageOption1: false,
  messageOption2: false,
  messageOption3: false,
  messaging: false,
};


const stateSlice = createSlice({
  name: "stateManage",
  initialState,
  reducers: {
    show: (state) => {
      state.status = true;
    },
    dontShow: (state) => {
      state.status = false;
    },
    showProfile: (state) => {
      state.status = true;
    },
    dontShowProfile: (state) => {
      state.status = false;
    },
    businessState: (state, action) => {
      state.businessBtn = !state.businessBtn;
      state.profileBtn = false;
    },
    profileState: (state) => {
      state.profileBtn = !state.profileBtn;
      state.businessBtn = false;
    },
    messageBtn1: (state) => {
      state.messageOption1 = !state.messageOption1;
      state.messageOption2 = false;
      state.messageOption3 = false;
    },
    messageBtn2 : (state) => {
        state.messageOption1 = false,
        state.messageOption2 = !state.messageOption2;
        state.messageOption3 = false;
    },
    messageBtn3 : (state) => {
        state.messageOption1 = false,
        state.messageOption2 = false;
        state.messageOption3 = !state.messageOption3;
    },

    message : (state) => {
        state.messaging = !state.messaging;
    },

    closeAll: (state) => {
      (state.profileBtn = false), (state.businessBtn = false);
      state.messageOption1 = false;
      state.messageOption2 = false;
      state.messageOption3 = false;
      state.messaging = false
    },
  },
});

export const {
  show,
  dontShow,
  showProfile,
  dontShowProfile,
  businessState,
  profileState,
  messageBtn1,
  messageBtn2,
  messageBtn3,
  message,
  closeAll,
} = stateSlice.actions;

export default stateSlice.reducer;
