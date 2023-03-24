import { createSlice } from "@reduxjs/toolkit";
import { counterInitialType } from "@/interfaces/counter.interface";

const initialState: counterInitialType = {
  value: 0,
};

const counterSlicer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlicer.actions;

export const counterReducer = counterSlicer.reducer;
