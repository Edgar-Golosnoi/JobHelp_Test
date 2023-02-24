import React from 'react';
import './App.css';
// import Footer from './components/Footer/Footer';
// import Popupform from './components/PopupForm/Popupform';
import Navbar from './components/Navbar/Navbar';
// import Registration from './components/RegistrationForm/Registration';



function App() {
  return (
    <div className='App'>
        <Navbar />
        <div className='body-main-text'>
          <h1>Подберём резюме для ваших вакансий и обзвоним кандидатов </h1>
        </div>
        <div className='body-text'>
            <h1>Проведём детальный анализ вакансии</h1>
        </div>
        <img className="card-img" src="../image1.png" alt="JobHelp"/>
    </div>
  )
}

export default App;
