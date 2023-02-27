import React from 'react';
import './App.css';
// import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
// import Popupform from './components/PopupForm/Popupform';
import Navbar from './components/Navbar/Navbar';
// import Registration from './components/RegistrationForm/Registration';
import Body from './components/Body/Body';



function App() {
  function handleSubmit(event) {
    event.preventDefault();
    alert('Mы вам перезвоним!')
  }

  return (
    <div className='App-container'>
        <Navbar />
        <div className='body-main-text'>
          <h1>Подберём резюме для ваших вакансий <br /> и обзвоним кандидатов </h1>
        </div>
        <div className='body-text'>
            <h4 className='text-1'>Проведём детальный анализ вакансии</h4>
            <h1 className='center-column1'></h1>
            <h4 className='text-2'>Организуем ручной подбор с учётом ваших требований и пожеланий</h4>
            <h1 className='center-column2'></h1>
            <h4 className='text-3'>Соберём актуальные резюме с ведущих job-ресурсов</h4>
        </div>
        <div className='body-content'>
          <h1 className='title'>Оставьте заявку, и менеджер ответит в течение 30 минут</h1>
          <input className='userName' placeholder='Ваше имя' type='text'></input>
          <input className='userTel' placeholder='Ваше телефон' type='text'></input>
          <input className='aboutSerch' placeholder='Какого сотрудника вы ищите' type='text'></input>

          <button className='submitForm' type='text'>
          <p className='btn-text' onClick={handleSubmit}>Заказать звонок</p></button>
          
          <h2 className='title'>Нажимая на кнопку вы даете согласие <u>на обработку персональных данных и соглашаетесь с политикой конфидециальности</u></h2>
        </div>
        <img className="card-img" src="../image1.png" alt="JobHelp"/>
        <Body />
        <Footer />
    </div>
    
  )
}

export default App;
