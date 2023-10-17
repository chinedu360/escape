import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./features/postSlice/postSlice";

export const store = configureStore({
  reducer: {
    post: postSlice,
  },
});
