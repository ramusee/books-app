import React, {FC} from 'react';
import './style.css';
import {IBooks} from "../../models/IBooks";
import {BookImage} from "./BookImage";


const BookItem: FC<IBooks> = ({volumeInfo}) => {
	return (
		<li className="book-list__item">
			<a className="item__link" href={volumeInfo?.previewLink} target="_blank">
				<BookImage imageLinks={volumeInfo?.imageLinks}/>
			</a>
			<p className="item__title">{volumeInfo?.title}</p>
			<p className="item__author">{volumeInfo?.authors?.join(', ')}</p>
		</li>
	);
};
export {BookItem};