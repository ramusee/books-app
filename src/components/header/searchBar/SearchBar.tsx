import React, {FormEvent, useState} from "react";
import '../style.css';
import {useAppDispatch, useAppSelector} from "../../../store/hooks/redux";
import {bookSlice} from "../../../store/reducers/BookSlice";
import {fetchBooks} from "../../../store/reducers/ActionCreators";
import './style.css';

function SearchBar() {
	const [inputValue, setInputValue] = useState('');
	const {setCurrentBook, clearState} = bookSlice.actions;
	const {category} = useAppSelector(state => state.bookReducer)

	const dispatch = useAppDispatch();

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		if (!inputValue.trim()) return;
		dispatch(setCurrentBook(inputValue));
		dispatch(fetchBooks({title: inputValue, category: category}));
		setInputValue('');
	}

	return (
		<div className="search-bar">
			<form onSubmit={handleSubmit}
				  className="header__form"
				  action="src/components/Header/searchBar/SearchBar.tsx">
				<input value={inputValue}
					   onChange={(e) => setInputValue(e.target.value)}
					   className="form__search" type="text" placeholder="Поиск книги"/>
				<input className="form__search-icon" type="submit" value=""/>
			</form>
		</div>
	);
}

export {SearchBar};