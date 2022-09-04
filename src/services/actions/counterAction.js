import { INCREMENT, DECREMENT, RESET, CHANGE } from "../constants/counterConstants";

export const incrementCounter = () => {
	return {
		type: INCREMENT,
	};
};

export const decrementCounter = () => {
	return {
		type: DECREMENT,
	};
};

export const changeCounter = (value) => {
	return {
		type: CHANGE,
		payload: value,
	};
};

export const resetCounter = () => {
	return {
		type: RESET,
	};
};
