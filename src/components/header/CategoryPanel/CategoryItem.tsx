import React, {FC} from 'react';
import {ICategoryProps} from "../../../models/IBooks";
import {useAppSelector} from "../../../store/hooks/redux";
import './style.css'

const classes = new Set (['categories__item'])

const CategoryItem: FC<ICategoryProps> = ({id, title, onHandleClick}) => {
	const {category} = useAppSelector(state => state.bookReducer)
	category === id ? classes.add('active-category') : classes.delete('active-category')
	return (
		<li className={Array.from(classes).join(' ')}>
			<button className="category__btn"
					onClick={() => onHandleClick(id)}
			>{title}</button>
		</li>
	);
};

export default CategoryItem;