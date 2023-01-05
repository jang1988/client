import React from 'react';
import './AuthPage.scss'

const AuthPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="auth-page">
          <h3>Авторизация</h3>
          <form className="form form-login">
            <div className="row">
              <div className="input-field col s12">
                <input type="email" name="email" className="validate" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input type="password" name="password" className="validate" />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <button className="wawes-effect wawes-light btn blue">
                Войти
              </button>
              <a className="btn-outline btn-reg" href="">Нет аккаунта ?</a>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthPage;
