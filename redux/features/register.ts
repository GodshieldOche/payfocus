import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'
import axios from 'axios'



export type error = {
    errors: {}[]
}

// Define a type for the slice state
export interface authState {
    loading: boolean;
    data: object;
    error: object | null;
}


export const postRegister: any = createAsyncThunk(
    `user/postRegister`, async (body: any, { dispatch, rejectWithValue }) => {

        try {
            const { data }: any = await axios.post(`https://api.payfocuss.com/reg`, body, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            // dispatch(reset())

        return data

        } catch (error: any) {
            return rejectWithValue(error.message)
        }

    }
)


export const verifyAccount: any = createAsyncThunk(
    `user/verifyAccount`, async ({otp, token}: any, { dispatch, rejectWithValue }) => {

        try {
            const { data }: any = await axios.get(`https://api.payfocuss.com/auth/recovery?otp=${otp}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJVZ2xpZnkzNjUiLCJzaWQiOiIzMWJlNTc3Ny0zIiwianRpIjoiMmM5NWU4NjUtNTk0Ni00MjFkLTgwNWQtMTdjZWQ2YTYwYjNkIiwiaWF0IjoiMDkvMjcvMjAyMiAxNTo1MTowNSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImdvZGR5YXJ0ejAyNThAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6IkdvZHNoaWVsZCBPY2hlIEdvZHNoaWVsZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjMxYmU1Nzc3LTMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ByaW1hcnlncm91cHNpZCI6Imh0dHBzOi8vdWktYXZhdGFycy5jb20vYXBpLz9iYWNrZ3JvdW5kPTBEOEFCQyZjb2xvcj1mZmYmbmFtZT1HIiwiZXhwIjoxNjY0Mjk0NDY1LCJpc3MiOiJodHRwczovL2FwaS5wYXlmb2N1c3MuY29tIiwiYXVkIjoiaHR0cHM6Ly9hcGkucGF5Zm9jdXNzLmNvbSJ9.flIUk8HCw1cSSw_KC0plYiryFIKWBNanhou5oOFDGSY`
                }
            })
            
            dispatch(reset())

            return data

        } catch (error: any) {
            return rejectWithValue(error.message)
        }

    }
)


export const resendOtp: any = createAsyncThunk(
    `user/resendOtp`, async ({email, token}: any, { dispatch, rejectWithValue }) => {

        try {
            const { data }: any = await axios.get(`https://api.payfocuss.com/auth/reotp?email=${email}`, {
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

export const registerSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            return state = initialState
        }
    },
    extraReducers: {
        [postRegister.pending]: (state) => {
            state.loading = true
        },
        [postRegister.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data = payload
        },
        [postRegister.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [verifyAccount.pending]: (state) => {
            state.loading = true
        },
        [verifyAccount.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data = payload
        },
        [verifyAccount.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// // Other code such as selectors can use the imported `RootState` type
export const { reset } = registerSlice.actions
// export const data = (state: AppState) => state.auth.data
// export const loading = (state: AppState) => state.auth.loading
// export const error = (state: AppState) => state.auth.error

export default registerSlice.reducer