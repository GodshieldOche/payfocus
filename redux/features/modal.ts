import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface modalState {
    modalState: boolean
    modalData: {
        title: string,
        func: () => void,
        text: string,
        buttonText: string,
        type: string
    }
}




// Define the initial state using that type
const initialState: modalState = {
    modalData: {
        title: '',
        func: () => {},
        text: '',
        buttonText: '',
        type: ''
    },
    modalState: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        reset: (state) => {
            return state = initialState
        },
        setModal: (state, { payload }) => {
            state.modalState = payload
        },
        setModalData: (state, { payload }) => {
            state.modalData = payload
        },
    },
})


// // Other code such as selectors can use the imported `RootState` type
export const { setModalData, setModal, reset } = modalSlice.actions


export default modalSlice.reducer