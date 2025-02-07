import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // Import your slice

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your slice reducer here
  },
});

export default store;
