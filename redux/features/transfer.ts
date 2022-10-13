import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { bankTransfer, pfTransfer } from "../../typeDefs";

export type error = {
  errors: {}[];
};

// Define a type for the slice state
export interface authState {
  loading: boolean;
  data: any;
  error: object | null;
}

export const postTransfer: any = createAsyncThunk(
  `user/postTransfer`,
  async (
    { body, token }: { body: pfTransfer | bankTransfer; token: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const { data }: any = await axios.post(
        `https://api.payfocuss.com/transfer`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(reset());

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const lookUp: any = createAsyncThunk(
  `user/lookUp`,
  async (
    { email, token }: { email: string; token: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const { data }: any = await axios.get(
        `https://api.payfocuss.com/lookup/${email}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(reset());

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Define the initial state using that type
const initialState: authState = {
  loading: true,
  data: {},
  error: null,
};

export const transferSlice = createSlice({
  name: "transfer",
  initialState,
  reducers: {
    reset: (state) => {
      return (state = initialState);
    },
  },
  extraReducers: {
    [postTransfer.pending]: (state) => {
      state.loading = true;
    },
    [postTransfer.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [postTransfer.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [lookUp.pending]: (state) => {
      state.loading = true;
    },
    [lookUp.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [lookUp.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

// // Other code such as selectors can use the imported `RootState` type
export const { reset } = transferSlice.actions;

export default transferSlice.reducer;
