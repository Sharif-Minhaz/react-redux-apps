import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "./booksSlice";

const AddBook = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const book = {
			id: Date.now(),
			title,
			author,
		};
		dispatch(addBook(book));
		navigate("/show-books", { replace: true });
	};

	return (
		<div>
			<h2>Add Book</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="title"
					value={title}
					placeholder="title"
					required
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					type="text"
					name="author"
					value={author}
					placeholder="author"
					required
					onChange={(e) => setAuthor(e.target.value)}
				/>
				<button>ADD</button>
			</form>
		</div>
	);
};

export default AddBook;
