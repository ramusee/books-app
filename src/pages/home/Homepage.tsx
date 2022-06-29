import React, {FC} from "react";
import {BookItem} from "../../components/bookItem/BookItem";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import Loading from "../../components/loadingScroll/Loading";
import {WelcomeSection} from "../../components/welcomeSection/WelcomeSection";
import {bookSlice} from "../../store/reducers/BookSlice";
import './style.css';


const Homepage: FC = () => {
	const {currentBook, books, isLoading, error} = useAppSelector(state => state.bookReducer);
	const dispatch = useAppDispatch();
	const {clearState} = bookSlice.actions;

	const handleClear = () => {
		dispatch(clearState());
	};
	return (
		<section className="homepage">
			{isLoading && <Loading/>}
			{error && !isLoading && <h2>{error}</h2>}
			{!error && !isLoading && !books.length && <WelcomeSection/>}
			{!!books.length && !isLoading && !error && <div  className="homepage">
			  <h1 className="search-result__title">Результаты поиска "{currentBook}":</h1>
			  <div>
				<button className="search-result__button"
						onClick={handleClear}>
				  Очистить
				</button>
				<ul className="search-result__book-list">
					{books.map((book) => (
						<BookItem key={book.etag}
								  volumeInfo={book.volumeInfo}/>)
					)}
				</ul>
			  </div>
			</div>
			}
		</section>
	);
};

export {Homepage};