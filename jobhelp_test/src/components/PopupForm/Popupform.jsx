import React from 'react'

export default function Popupform() {
  return (
    <div>
    <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Ваше имя</label>
    <input type="name" className="form-control" id="InputName" aria-describedby="emailHelp" placeholder="Александра"/>
  </div>
  <div className="form-group">
    <label htmlFor="InputTelephone">Телефон</label>
    <input type="password" className="form-control" id="InputTelephone" placeholder="+7(996) 567-43-23"/>
  </div>
  <div className="form-group">
  <label htmlFor="InputTelephone">Какого сотрудника вы ищите?</label>
  <input type="password" className="form-control" id="InputTelephone" placeholder="Менеджер по продажам"/>
  </div>
  <button type="submit" className="btn btn-primary">Отправить</button>
    <span> нажимая на кнопку вы соглашаетесь с <a href="/politika_konfeditialnosti/">политикой конфиденциальности</a></span>
  </form>
    </div>
  )
}
