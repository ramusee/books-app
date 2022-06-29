import {IBooks} from "../../models/IBooks";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchBooks} from "./ActionCreators";
import {BookState} from "../../models/IStore";


const initialState: BookState = {
	currentBook: '',
	books: [],
	category: '',
	isLoading: false,
	error: '',
};

export const bookSlice = createSlice({
	name: 'bookSlice',
	initialState,
	reducers: {
		setCurrentBook(state, action: PayloadAction<string>) {
			state.currentBook = action.payload;
		},
		clearState(state) {
			state.books = [];
			state.currentBook = '';
			state.category = '';
		},
		setCurrentCategory(state, action: PayloadAction<string>) {
			state.category = action.payload;
		}
	},
	extraReducers: {
		[fetchBooks.fulfilled.type]: (state, action: PayloadAction<IBooks[]>) => {
			state.isLoading = false;
			state.error = '';
			state.books = action.payload;
		},
		[fetchBooks.pending.type]: (state) => {
			state.isLoading = true;
		},
		[fetchBooks.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
});

export default bookSlice.reducer;