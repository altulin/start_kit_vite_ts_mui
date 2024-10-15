import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalState, initialState } from "./initialState";

const modalSlice = createSlice({
  name: "modal",
  initialState,

  reducers: {
    stepTo(state, action: PayloadAction<IModalState>) {
      state.modalState = action.payload;
    },

    clearAllStep(state) {
      state.modalState = null;
    },

    setErrorModal(state, action: PayloadAction<string>) {
      state.modalState = { error: { text: action.payload } };
    },
  },
});

export const { stepTo, clearAllStep, setErrorModal } = modalSlice.actions;
export default modalSlice.reducer;
