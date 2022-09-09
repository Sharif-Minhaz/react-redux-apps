import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import AddBook from "../features/books/AddBook";
import Error from "../pages/Error";
import Home from "../pages/Home";
import BooksView from "../features/books/BooksView";
import EditBook from "../features/books/EditBook";

const Routers = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/add-book" element={<AddBook />} />
				<Route path="/show-books" element={<BooksView />} />
				<Route path="/edit-book/:id" element={<EditBook />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
