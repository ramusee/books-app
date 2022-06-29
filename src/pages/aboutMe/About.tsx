import React from "react";
import "./style.css";

function About() {
	return (
		<section>
			<div className="about">
				<h1 className="about__title">Привет!</h1>
				<p className="about__text">
					{`Меня зовут Рамиль.
					Данное приложение создано для себя.
					Целью было не только применить полученные
					навыки по фронтенду на практике, но и сделать его полезным.
					Оно помогает мне искать книги, 
					добавлять в избранное, отмечать их прочитанными.
					Надеюсь, и для тебя оно окажется полезным :)`}
				</p>
				<ul className="contacts">
					<li className="contacts__item">Telegram: t.me/yucupov</li>
					<li className="contacts__item">Почта: ram.u@live.com</li>
					<li className="contacts__item">Телефон: +79272024062</li>
				</ul>
			</div>
		</section>

	);
}

export {About};