import { createSlice } from "@reduxjs/toolkit";

/*
  Intiial state
*/
const initialState = {
  duration: "",
  mobileSidebarOpen: false,
  currentSession: {
    chatId: null,
    chatName: "New Sight",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openMobileSideBar(state, action) {
      state.mobileSidebarOpen = true;
    },
    closeMobileSideBar(state, action) {
      state.mobileSidebarOpen = false;
    },
    changeSessionName(state, action) {
      state.currentSession = action.payload;
    },
  },
});

export const { openMobileSideBar, closeMobileSideBar, changeSessionName } =
  uiSlice.actions;

export default uiSlice.reducer;
