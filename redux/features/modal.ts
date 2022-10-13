import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface modalState {
  modalState: boolean;
  searchModalState: boolean;
  modalData: {
    title: string;
    func: () => void;
    text: string;
    buttonText: string;
    type: string;
  };
  person: string;
}

// Define the initial state using that type
const initialState: modalState = {
  modalData: {
    title: "",
    func: () => {},
    text: "",
    buttonText: "",
    type: "",
  },
  modalState: false,
  searchModalState: false,
  person: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    reset: (state) => {
      return (state = initialState);
    },
    setModal: (state, { payload }) => {
      state.modalState = payload;
    },
    setModalData: (state, { payload }) => {
      state.modalData = payload;
    },
    setSearchModalState: (state, { payload }) => {
      state.searchModalState = payload;
    },
    setPerson: (state, { payload }) => {
      state.person = payload;
    },
  },
});

// // Other code such as selectors can use the imported `RootState` type
export const { setModalData, setModal, reset, setSearchModalState, setPerson } =
  modalSlice.actions;

export default modalSlice.reducer;
