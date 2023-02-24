import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item active">
      <a className="nav-link" href="#"></a>
      <img className="card-img-top" src="../Logo.png" alt="JobHelp"/>
      </li>
        <li className="nav-item active">
          <a className="nav-link1" href="#">О нас</a>
        </li>
        <li className="nav-item">
          <a className="nav-link2" href="#">Услуги</a>
        </li>
        <li className="nav-item">
          <a className="nav-link3" href="#">Стоимость</a>
        </li>
        <li className="nav-item">
        <a className="nav-link4" href="#">Контакты</a>
        </li>
        <li className="nav-item">
          <a className="nav-link5" href="#">Статьи</a>
        </li>
        <li className="nav-item-telephone">
        <a className="nav-link disabled" href="#">телефон</a>
        </li>
        <span className="nav-span-number">8 800 700 87 62</span>
        <button className="nav-btn" width='343px' height="53px" border="10px"><span className='span'>Личный кабинет</span></button>
      </ul>
    </div>
  </nav>
  )
}


