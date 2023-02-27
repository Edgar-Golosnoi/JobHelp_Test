import React from 'react';
import './Body.css';

export default function Body() {
  const sendForm = (e) => {
    e.preventDefault();
    alert("Заявка отправлена!")
  };
  return (
    <div className='registration'>
    <div className="title-body">Почему работать с JobHelp  удобно и выгодно</div>
    <div className="row">
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body1">
          <h5 className="card-title">Доступ к базам job-ресурсов</h5>
          <p className="card-text">Найдём лучших кандидатов среди 74 млн резюме из баз популярных</p>
          <a href="#" className="btn"><p>&#8595;</p></a>
        </div>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body2">
          <h5 className="card-title">Дешевле, чем кадровое агентство</h5>
          <p className="card-text">Наши услуги стоят в 3-4 раза дешевле, чем у кадровых агентств.</p>
          <a href="#" className="btn"><p>&#8595;</p></a>
        </div>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body3">
          <h5 className="card-title">Помощь персонального менеджера</h5>
          <p className="card-text">Найдём лучших кандидатов среди 74 млн резюме из баз популярных.</p>
          <a href="#" className="btn"><p>&#8595;</p></a>
        </div>
      </div>
    </div>
    <img className="card-body-img" src="../1.png" alt="JobHelp"/>
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body4">
          <h5 className="card-title">Высокая скорость работы</h5>
          <p className="card-text">Присылаем первые резюме в течение двух рабочих дней после начала работы. Резюме</p>
          <a href="#" className="btn"><p>&#8595;</p></a>
        </div>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body5">
          <h5 className="card-title">Весь поиск как на ладони</h5>
          <p className="card-text">Гарантируем высокое качество работ. Наблюдайте за всеми</p>
          <a href="#" className="btn"><p>&#8595;</p></a>
        </div>
      </div>
    </div>
    <div className="col-sm-6">
    <div className="card">
    <div className="card-body6">
      <h5 className="card-title">Большой опыт в поиске кандидатов </h5>
      <p className="card-text">Гарантируем высокое качество работ. Наблюдайте за всеми</p>
      <a href="#" className="btn"><p>&#8595;</p></a>
      </div>
      </div>
      </div>
      <button className='btn-call' type='text'><p className='btn-text' onClick={sendForm}>Оставить заявку</p></button>
    </div>
    </div>
  )
}

