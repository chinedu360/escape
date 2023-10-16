import { configureStore } from "@reduxjs/toolkit";
// import newsletterSlice from "./features/newsletter/newsletterSlice";
// import userSlice from "./features/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    // user: userSlice,
    // newsletter: newsletterSlice,
  },
});
