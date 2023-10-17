import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
  isLoading: false,
  post: [],
  user: [],
  comment: [],
  errorMessage: null,
  postStatus: null,
};

export const postData = createAsyncThunk("/post", async (_, thunkAPI) => {
  try {
    const res = await api.get("/posts");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const userData = createAsyncThunk("/user", async (_, thunkAPI) => {
  try {
    const res = await api.get("/users");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const commentData = createAsyncThunk("/comment", async (_, thunkAPI) => {
  try {
    const res = await api.get("/comments");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postData.pending, (state) => {
        state.isLoading = true;
        state.signUpStatus = "pending";
        state.errorMessage = null;
      })
      .addCase(postData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.post = payload;
        state.signUpStatus = "fulfilled";
        state.errorMessage = null;
      })
      .addCase(postData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.signUpStatus = "failed";
        state.errorMessage = payload;
      })
      .addCase(userData.pending, (state) => {
        state.isLoading = true;
        state.signUpStatus = "pending";
        state.errorMessage = null;
      })
      .addCase(userData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.signUpStatus = "fulfilled";
        state.errorMessage = null;
      })
      .addCase(userData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.signUpStatus = "failed";
        state.errorMessage = payload;
      })
      .addCase(commentData.pending, (state) => {
        state.isLoading = true;
        state.signUpStatus = "pending";
        state.errorMessage = null;
      })
      .addCase(commentData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.comment = payload;
        state.signUpStatus = "fulfilled";
        state.errorMessage = null;
      })
      .addCase(commentData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.signUpStatus = "failed";
        state.errorMessage = payload;
      });
  },
});

export default postSlice.reducer;
