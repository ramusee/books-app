import React, {FC} from 'react';
import './style.css'

const WelcomeSection: FC = () => {
  return (
    <div className="homepage__welcome-section">
      <h1 className="welcome-section__title">{'🔍 Ищите книги\n⭐️ Добавляйте в избранное \n ✅ Отмечайте прочитанными'}</h1>
    </div>
  );
};

export {WelcomeSection};