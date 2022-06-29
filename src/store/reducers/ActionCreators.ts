import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {getApiBooks} from "../../api/api";
import {IApiParams} from "../../models/IStore";

export const fetchBooks = createAsyncThunk(
	'book/fetchAll',
	async ({title, category}: IApiParams, thunkAPI) => {
		try {
			const response = await axios.get(getApiBooks({title, category}))
			const data = response.data.items
			if(data.totalItems === 0) {
				throw new Error ('Книги не найдены')
			}
			return data
		} catch (error) {
			// const message = e.message ? e.message : 'Не удалось загрузить книги'
			return thunkAPI.rejectWithValue('Не удалось загрузить книги')
		}
	}
)