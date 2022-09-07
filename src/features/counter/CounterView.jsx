import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, set, reset } from "./counterSlice";

const CounterView = () => {
	const count = useSelector((state) => state.counter?.count);
	const dispatch = useDispatch();

	const handleInc = () => {
		dispatch(increment());
	};

	const handleDec = () => {
		dispatch(decrement())
	};

	const handleChange = (e) => {
		dispatch(set(Number(e.target.value)));
	};

	const handleReset = () => {
		dispatch(reset());
	};

	return (
		<div>
			<h2>Count</h2>
			<button onClick={handleInc}>inc</button>
			<input type="text" onChange={handleChange} value={count} />
			<button onClick={handleDec}>dec</button>
			<button onClick={handleReset}>reset</button>
		</div>
	);
};

export default CounterView;
