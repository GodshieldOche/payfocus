import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface modalState {
    modalState: boolean
    modalData: object
}




// Define the initial state using that type
const initialState: modalState = {
    modalData: {},
    modalState: true

}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal: (state, { payload }) => {
            state.modalState = payload
        },
        setModalData: (state, { payload }) => {
            state.modalData = payload
        },
    },
})


// // Other code such as selectors can use the imported `RootState` type
export const { setModalData, setModal } = modalSlice.actions


export default modalSlice.reducer