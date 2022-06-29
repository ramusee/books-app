import {IBooks} from "./IBooks";

export interface IApiParams {
	title: string;
	category?: string;
}

export interface BookState {
	currentBook: string;
	books: IBooks[];
	category: string;
	isLoading: boolean;
	error: string;
}