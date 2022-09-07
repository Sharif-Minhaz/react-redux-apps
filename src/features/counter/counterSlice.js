import { createSlice } from "@reduxjs/toolkit";

export const counterSlicer = createSlice({
	name: "counter",
	initialState: { count: 0 },
	reducers: {
		increment: (state) => {
			state.count = state.count + 1;
		},
		decrement: (state) => {
			state.count = state.count - 1;
		},
		set: (state, action) => {
			state.count = action.payload;
		},
		reset: (state) => {
			state.count = 0;
		},
	},
});

export const { decrement, increment, reset, set } = counterSlicer.actions;

export default counterSlicer.reducer;
