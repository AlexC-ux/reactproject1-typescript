import React from 'react';

//Текущий год
let year:number = new Date().getFullYear();

function ReactComponent() {
    return (
        <div className="container">
      <footer className="py-5">
          <div className="row">
              <div className="col-md-5 offset-md-1 mb-3">
                  <form action="/engine/newsletter/index.php" method="POST">
                      <h5>Подпишитесь на новостную рассылку</h5>
                      <p>Заполните форму ниже, чтобы получать уведомления по электронной почте о новых конкурсах, новостях, событиях</p>
                      <div className="d-flex flex-column flex-sm-row w-100 gap-2">

                          <input type="hidden" name="subscribe"/>
                              <label htmlFor="newsletter1" className="visually-hidden">Адрес электронной почты</label>
                              <input type="email" className="form-control" id="email" required name="email" placeholder="you@example.com"/>
                                  <button className="btn btn-primary" type="submit">Подписаться</button>
                      </div>
                  </form>
              </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© {year} АктивМКТ</p>

              </div>
          </div>
            </footer>
            </div>
  );
}

export default ReactComponent;