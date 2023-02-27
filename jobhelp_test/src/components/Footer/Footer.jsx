
import React from 'react';
import './Footer.css';
export default function Footer() {
  const sendForm = (e) => {
    e.preventDefault();
    alert("Заявка отправлена!")
  };

  return (
    <div>
    <h1 className='title-footer'>Мы любим писать про HR</h1>
    <div className='footer-content'>
    <div className="card-group">
    <div className="card">
      <img className="card-img-footer" src="../card1.png" alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title-footer"></h5>
        <p className="card-text">Внимание! Манипулятор на собеседовании</p>
        <p className="card-text"><small className="text-muted">19 сентября 234 просмотра</small></p>
      </div>
    </div>
    <div className="card">
      <img className="card-img-footer" src="../card2.png" alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title-footer"></h5>
        <p className="card-text">Встречаем по одёжке – как оценить внешний вид кандидата в современных реалиях</p>
        <p className="card-text"><small className="text-muted">13 сентября 211 просмотров</small></p>
      </div>
    </div>
    <div className="card">
      <img className="card-img-footer" src="../card3.png" alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title-footer"></h5>
        <p className="card-text">Кандидат, которому вы отказали, запросил обратную связь. Давать или не давать?</p>
        <p className="card-text"><small className="text-muted">5сентября 396 просмотров</small></p>
      </div>
    </div>
    <div></div>
  </div>
  <img className="card-img-footer-logo" src="../Logo.png" alt="Card image cap"/>
  <div className='oboutCompany'>
    <ul className='col1'> 
      <li>ООО Джобхелп</li>
      <li>ОГРН 1187847372327</li>
      <li>ИНН 7810745237</li>
    </ul>
    <ul className='col2'> 
    <li><strong>Меню</strong></li>
    <li>О Нас</li>
    <li>Стоимость</li>
    <li>Контакты</li>
    <li>Блог</li>
  </ul>
    <ul className='col3'> 
    <li><strong>Услуги</strong></li>
    <li>Посик анкет</li>
    <li>Поиск + обзвон</li>
    <li>Проверка кандидата</li>
    <li>Размещение вакансии</li>
    <li>Рассылка</li>
</ul>
<ul className='col4'> 
    <li><strong>Контакты</strong></li>
    <li>Телефон</li>
    <li><strong>8 800 700-87-62</strong></li>
    <li><strong>191025, г. Санкт-Петербург, Невский проспект, д. 104 (БЦ Tempo), офис 222</strong></li>
    <li>работаем по будням</li>
    <li><strong>с 9:00 до 18:00</strong></li>
    </ul>
    <button className='btn-footer'>
    <p className='btn-footer-text' onClick={sendForm}>Оставить заявку</p>
  </button>
  </div>
  <span><strong className='upp'><a href="#" className="btn">Наверх</a></strong></span>
  </div>
  </div>
  )
}
