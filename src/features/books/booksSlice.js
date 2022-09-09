import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
	books: [
		{ id: 1662746216450, title: "Gone Girl", author: "Ben Afleck" },
		{ id: 1662746216452, title: "Deep Blue Sea", author: "Ben Afleck" },
	],
};

export const booksSlice = createSlice({
	name: "books",
	initialState: initialBooks,
	reducers: {
		showBooks: (state) => state,
		addBook: (state, action) => {
			state.books.push(action.payload);
		},
		deleteBook: (state, action) => {
			state.books = state.books.filter((book) => book.id !== action.payload);
		},
		updateBook: (state, action) => {
			const updatedBook = state.books.find((book) => book.id === Number(action.payload.id));
			if(updateBook) {
                updatedBook.author = action.payload.author;
				updatedBook.title = action.payload.title;
            }
		},
	},
});

export const { showBooks, addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
