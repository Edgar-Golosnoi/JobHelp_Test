import React from 'react'

export default function Registration() {
  return (
    <div>
    <form>
    <div className="form-group">
      <span>Вход/регистрация</span>
      <div className="form-check">
      <input className="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
      <label htmlFor="exampleInputEmail1">Войти</label>
      </div>
      <div className="form-check">
      <input className="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
      <label htmlFor="exampleInputEmail1">Зарегестрироваться</label>
      </div>
      <div className="form-group">
      <label htmlFor="InputEmail1">Ваше имя</label>
      <input type="name" className="form-control" id="InputName" aria-describedby="emailHelp" placeholder="Алексей"/>
      </div>
      <label htmlFor="exampleInputEmail1">E-mail</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="jobhelp@mail.com"/>
    </div>
    <div className="form-group">
    <label htmlFor="InputTelephone">Телефон</label>
    <input type="password" className="form-control" id="InputTelephone" placeholder="+7(996) 567-43-43"/>
    </div>
    <span>Пожалуйста заполните форму. Наш Менеджер свяжется с Вами в течение рабочего дня</span>
    <button type="submit" className="btn btn-primary">Отправить</button>
    <span> нажимая на кнопку вы соглашаетесь с <a href="/politika_konfeditialnosti/">политикой конфиденциальности</a></span>
    </form>
    </div>
  )
}
