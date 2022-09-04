import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosAction";

const Todos = () => {
	const { todos, isLoading, error } = useSelector((state) => state);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllTodos());
	}, []);

	return (
		<div>
			<h1>Todos App</h1>
			{isLoading ? (
				"Loading please wait"
			) : error ? (
				<p>{error}</p>
			) : (
				<div>
					{todos.map((todo) => (
						<div key={todo.userId + todo.id}>
							<p>{todo.id}</p>
							<p>{todo.title}</p>
							<p>completed: {todo.completed ? "Yes" : "No"}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Todos;
