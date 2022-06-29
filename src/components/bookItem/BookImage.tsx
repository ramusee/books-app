import React, {FC} from 'react';
import {IVolumeInfo} from "../../models/IBooks";


const BookImage: FC<IVolumeInfo> = ({imageLinks}) => {

	return (
		imageLinks ?
			<>
				<img className="item__image" src={imageLinks?.thumbnail} alt="book-cover"/>
			</> :
			<p className="item__miss-image">
				Изображение отсутствует
			</p>
	);
};

export {BookImage};