// Import necessary modules
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api"; // Import an API module

// Define the initial state for the postSlice
const initialState = {
  isLoading: false, // Indicates if data is loading
  post: [], // Store for posts data
  user: [], // Store for user data
  comment: [], // Store for comment data
  errorMessage: null, // Stores error messages
  postStatus: null, // Status of post-related operations
};

// Create an asynchronous thunk to fetch post data from the API
export const postData = createAsyncThunk("/post", async (_, thunkAPI) => {
  try {
    const res = await api.get("/posts"); // Make an API request to fetch posts
    return res.data; // Return the fetched data
  } catch (error) {
    return thunkAPI.rejectWithValue(error); // Handle and reject with an error
  }
});

// Create an asynchronous thunk to fetch user data from the API
export const userData = createAsyncThunk("/user", async (_, thunkAPI) => {
  try {
    const res = await api.get("/users"); // Make an API request to fetch users
    return res.data; // Return the fetched data
  } catch (error) {
    return thunkAPI.rejectWithValue(error); // Handle and reject with an error
  }
});

// Create an asynchronous thunk to fetch comment data from the API
export const commentData = createAsyncThunk("/comment", async (_, thunkAPI) => {
  try {
    const res = await api.get("/comments"); // Make an API request to fetch comments
    return res.data; // Return the fetched data
  } catch (error) {
    return thunkAPI.rejectWithValue(error); // Handle and reject with an error
  }
});

// Create a postSlice to manage post-related state
const postSlice = createSlice({
  name: "post", // Slice name
  initialState, // Initial state
  reducers: {}, // Reducers (currently empty)
  extraReducers: (builder) => {
    builder
      .addCase(postData.pending, (state) => {
        state.isLoading = true;
        state.signUpStatus = "pending"; // Set status to pending
        state.errorMessage = null;
      })
      .addCase(postData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.post = payload; // Store the fetched data
        state.signUpStatus = "fulfilled"; // Set status to fulfilled
        state.errorMessage = null;
      })
      .addCase(postData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.signUpStatus = "failed"; // Set status to failed
        state.errorMessage = payload; // Store the error message
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

export default postSlice.reducer; // Export the reducer for use in the Redux store
