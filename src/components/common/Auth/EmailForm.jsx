import React from 'react';
import "./EmailForm.scss";

const EmailForm = ({
  hasAccount,
  setHasAccount,
  email,
  setEmail,
  password,
  setPassword,
  emailError,
  setEmailError,
  passwordError,
  setPasswordError,
  emailRegistration,
  setEmailRegistration,
  resetFields
}) => {
  const hideRegistrationForm = () => {
    resetFields()
    setEmailRegistration(false);
  }
  
  return (
    <div className={emailRegistration ? "registration registration_active" : "registration"}>
      <div className="registration__title">
        <form className="registration__form" onSubmit={(e) => e.preventDefault()}>
          
          <div className="registration__row">
            <label className="registration__label">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="registration__input"
              type="text" 
              required
            />
            <p className="registration__error">{emailError}</p>
          </div>

          <div className="registration__row">
            <label className="registration__label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="registration__input"
              type="password" 
              required
            />
            <p className="registration__error">{passwordError}</p>
          </div>

          <div className="registration__buttons">
            {
              hasAccount ? (
                <>
                  <button className="registration__button">Sign in</button>
                  <p className="registration__spare">
                    Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                  </p>
                </>
              ) : (
                <>
                  <button className="registration__button">Sign up</button>
                  <p className="registration__spare">
                    Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                  </p>
                </>
              )
            }
          </div>

          <div className="registration__close">
            <i className="fas fa-chevron-up registration__close-btn" onClick={hideRegistrationForm}></i>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmailForm;