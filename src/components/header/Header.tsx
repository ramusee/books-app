import React from "react";
import "./style.css";
import {SearchBar} from "./searchBar/SearchBar";
import {CategoryList} from "./CategoryPanel/CategoryList";
import {NavLink} from "react-router-dom";

const setActiveNavLink: ({isActive}: { isActive: boolean }) => (string) = ({isActive}) => isActive ? 'nav__item active-link' : 'nav__item';

function Header() {
	return (
		<header className="header">
			<div className="header__main">
				<div className="header__logo">
					<NavLink to="/"
							 className="logo__text">Lobook</NavLink>
				</div>
				<SearchBar/>
				<nav className="header__nav">
					<NavLink to="/favorites"
							 className={setActiveNavLink}>Избранное</NavLink>
					<NavLink to="/about"
							 className={setActiveNavLink}>Обо мне</NavLink>
				</nav>
			</div>
			<CategoryList/>
		</header>
	);
}

export {Header};