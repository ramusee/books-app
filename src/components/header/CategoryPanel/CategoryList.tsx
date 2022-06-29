import React, {FC} from "react";
import './style.css';
import {useAppDispatch, useAppSelector} from "../../../store/hooks/redux";
import {fetchBooks} from "../../../store/reducers/ActionCreators";
import CategoryItem from "./CategoryItem";
import {bookSlice} from "../../../store/reducers/BookSlice";

export const genres = [
	{id: '', title: 'Все'},
	{id: 'art', title: 'Искусство'},
	{id: 'biography', title: 'Биография'},
	{id: 'computers', title: 'Компьютеры'},
	{id: 'history', title: 'История'},
	{id: 'medicine', title: 'Медицина'},
	{id: 'poetry', title: 'Поэзия'},
	{id: 'fiction', title: 'Худ. литература'}
];

const CategoryList: FC = () => {
	const {currentBook} = useAppSelector(state => state.bookReducer);
	const {setCurrentCategory} = bookSlice.actions;
	const dispatch = useAppDispatch();

	const handleClick = (id: string) => {
		if (currentBook) {
			dispatch(setCurrentCategory(id))
			dispatch(fetchBooks({title: currentBook, category: id}));
		}
	};
	return (
		<div className="header__categories">
			<ul className="categories__list">
				{genres.map((genre) => (
						<CategoryItem key={genre.id}
									  id={genre.id}
									  title={genre.title}
									  onHandleClick={handleClick}
						/>
					)
				)}
			</ul>
		</div>
	);
};
export {CategoryList};