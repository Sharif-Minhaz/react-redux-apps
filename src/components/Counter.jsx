import { useDispatch, useSelector } from "react-redux";
import {
	changeCounter,
	decrementCounter,
	incrementCounter,
	resetCounter,
} from "../services/actions/counterAction";

const Counter = () => {
	const count = useSelector((state) => state.count);
	const dispatch = useDispatch();

	const handleOnchange = (e) => {
		dispatch(changeCounter(Number(e.target.value)));
	};

	const handleInc = () => {
		dispatch(incrementCounter());
	};

	const handleDec = () => {
		dispatch(decrementCounter());
	};

	const handleReset = () => {
		dispatch(resetCounter());
	};

	return (
		<div>
			<h1>Welcome to react-redux</h1>
			<button onClick={handleInc}>Inc</button>
			<input type="text" onChange={handleOnchange} value={count} />
			<button onClick={handleDec}>Dec</button>
			<button onClick={handleReset}>Reset</button>
		</div>
	);
};

export default Counter;
