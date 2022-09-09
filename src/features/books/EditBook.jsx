import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { updateBook } from "./booksSlice";

const EditBook = () => {
	const params = useParams();
	const location = useLocation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [title, setTitle] = useState(location.state?.title);
	const [author, setAuthor] = useState(location.state?.author);

	const handleUpdate = (e) => {
		e.preventDefault();
		const update = {
			id: params.id,
			title,
			author,
		};
		dispatch(updateBook(update));
		navigate("/show-books", { replace: true });
	};

	return (
		<>
			<h2>Update Book</h2>
			<form onSubmit={handleUpdate}>
				<input
					type="text"
					placeholder="title"
					required
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
				<input
					type="text"
					placeholder="author"
					required
					onChange={(e) => setAuthor(e.target.value)}
					value={author}
				/>
				<button>Update</button>
			</form>
		</>
	);
};

export default EditBook;
