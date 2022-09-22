import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const storeSession: any = createAsyncThunk(
    `user/storeSession`, async (token: any, { dispatch, rejectWithValue }) => {

        try {
            const { data }: any = await axios.post(`/api/auth/session`, token, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            dispatch(reset())

            return data

        } catch (error: any) {
            return rejectWithValue(error.message)
        }

    }
)



export const getSession: any = createAsyncThunk(
    `user/getSession`, async (obj: any, { dispatch, rejectWithValue }) => {

        try {
            const { data }: any = await axios.get(`/api/auth/token`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            dispatch(reset())
            
            return data

        } catch (error: any) {
            return rejectWithValue(error.message)
        }

    }
)


// Define a type for the slice state
interface sessionState {
    loading: boolean;
    data: string;
    message: string;
    error: string;
}

// Define the initial state using that type
const initialState: sessionState = {
    loading: false,
    data: '',
    message: '',
    error: '',

}

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        reset: (state) => {
            return state = initialState
        }
    },
    extraReducers: {
        [storeSession.pending]: (state) => {
            state.loading = true
        },
        [storeSession.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.message = payload.message
        },
        [storeSession.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [getSession.pending]: (state) => {
            state.loading = true
        },
        [getSession.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data = payload.token
        },
        [getSession.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// // Other code such as selectors can use the imported `RootState` type

export const { reset } = sessionSlice.actions

export default sessionSlice.reducer