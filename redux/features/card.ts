import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type error = {
  errors: {}[];
};

// Define a type for the slice state
export interface authState {
  loading: boolean;
  data: any;
  error: object | null;
}

export const postCreateCard: any = createAsyncThunk(
  `user/postCreateCard`,
  async ({ body, token }: any, { dispatch, rejectWithValue }) => {
    try {
      const { data }: any = await axios.post(
        `https://api.payfocuss.com/cards`,
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

export const postWithdraw: any = createAsyncThunk(
  `user/postWithdraw`,
  async ({ body, token }: any, { dispatch, rejectWithValue }) => {
    try {
      const { data }: any = await axios.post(
        ` https://api.payfocuss.com/card/withdraw`,
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

// Define the initial state using that type
const initialState: authState = {
  loading: true,
  data: {},
  error: null,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    reset: (state) => {
      return (state = initialState);
    },
  },
  extraReducers: {
    [postCreateCard.pending]: (state) => {
      state.loading = true;
    },
    [postCreateCard.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [postCreateCard.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [postWithdraw.pending]: (state) => {
      state.loading = true;
    },
    [postWithdraw.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [postWithdraw.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

// // Other code such as selectors can use the imported `RootState` type
export const { reset } = cardSlice.actions;

export default cardSlice.reducer;
