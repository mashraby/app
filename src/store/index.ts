import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slicers/counterSlicer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
