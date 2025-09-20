import { configureStore } from "@reduxjs/toolkit";
import complaintsSlice from "./complaints/slice";

const store = configureStore({
  reducer: {
    complaints: complaintsSlice.reducer,
  },
});

export default store;
