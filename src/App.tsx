import React, {FC} from "react";
import './App.css';
import {Header} from "./components/header/Header";
import {Routes, Route} from "react-router-dom";
import {Homepage} from "./pages/home/Homepage";
import {Favorites} from "./pages/favoriteBooks/Favorites";
import {About} from "./pages/aboutMe/About";
import {Layout} from "./components/layout/Layout";

const App: FC = () => {
	return (
		<div className="App">
				<Routes>
					<Route path="/" element={<Layout/>}>
						<Route index element={<Homepage/>}/>
						<Route path="favorites" element={<Favorites/>}/>
						<Route path="about" element={<About/>}/>
					</Route>
				</Routes>
		</div>
	);
};

export default App;
