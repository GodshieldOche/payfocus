import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export type error = {
    errors: {}[]
}

// Define a type for the slice state
export interface authState {
    loading: boolean;
    data: any;
    error: object | null;
}


export const postSwap: any = createAsyncThunk(
    `user/postSwap`, async ({body, token}: any, { dispatch, rejectWithValue }) => {

        try {
            const { data }: any = await axios.post(`https://api.payfocuss.com/fx`, body, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            dispatch(reset())

        return data

        } catch (error: any) {
            return rejectWithValue(error.message)
        }

    }
)




// Define the initial state using that type
const initialState: authState = {
    loading: true,
    data: {},
    error: null

}

export const swapSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            return state = initialState
        }
    },
    extraReducers: {
        [postSwap.pending]: (state) => {
            state.loading = true
        },
        [postSwap.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data = payload
        },
        [postSwap.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// // Other code such as selectors can use the imported `RootState` type
export const { reset } = swapSlice.actions

export default swapSlice.reducer