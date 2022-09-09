import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBook } from "./booksSlice";
const BooksView = () => {
	const books = useSelector((state) => state.booksReducer?.books);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleDelete = (bookId) => {
		dispatch(deleteBook(bookId));
	};

	return (
		<>
			<h2>All Available Books</h2>
			<table border="1">
				<thead>
					<tr>
						<th>Id</th>
						<th>Title</th>
						<th>Author</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{books &&
						books.map((book) => (
							<tr key={book.id}>
								<td>{book.id}</td>
								<td>{book.title}</td>
								<td>{book.author}</td>
								<td>
									<button
										onClick={() =>
											navigate("/edit-book/" + book.id, { state: book })
										}
									>
										Edit
									</button>
									<button onClick={() => handleDelete(book.id)}>Delete</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</>
	);
};

export default BooksView;
