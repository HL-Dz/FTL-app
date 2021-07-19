import React, { useState } from 'react';
import { delay } from '../../../helpers/helpers';
import { isValidEmailFormData } from '../../../helpers/validation';
import { userRegisterHandler, signInHandler } from '../../../redux/auth-reducer';
import Spinner from '../Spinner/Spinner';
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
  resetFields,
  resetErrors
}) => {

  const [emailLoading, setEmailLoading] = useState(false);

  const hideRegistrationForm = () => {
    resetFields()
    setEmailRegistration(false);
    resetErrors();
  }

  const getValidationErrors = () => {
    setEmailError('Invalid email or password');
    setPasswordError('Invalid email or password');
  }

  const registerNewUser = async () => {
    resetErrors()
    if(isValidEmailFormData(email, password)) {
      setEmailLoading(true);
      await delay(500);
      userRegisterHandler(email, password)
        .then(() => {
          resetFields();
          setEmailLoading(false);
        })
        .catch((err) => {
          setEmailLoading(false);
          switch(err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message)
              break;
            default:
              break;
          }
        })
    } else {
      getValidationErrors();
    }
  }

  const signIn =  async () => {
    resetErrors();
    if(isValidEmailFormData(email,password)){
      setEmailLoading(true);
      await delay(500);
      signInHandler(email, password)
        .then(() => {
          resetFields()
          setEmailLoading(false);
        })
        .catch(err => {
          setEmailLoading(false);
          switch(err.code) {
            case "auth/invalid-email":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
            case "auth/user-disabled":
              setEmailError("The user was blocked!");
              break;
            default:
              break;
          }
        })
    } else {
      getValidationErrors();
    }
  }
  
  return (
    <div className={emailRegistration ? "registration registration_active" : "registration"}>
      {emailLoading ? <Spinner/> : null}
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
                <button className="registration__button" onClick={signIn}>Sign in</button>
                <p className="registration__spare">
                  Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                </p>
              </>
            ) : (
              <>
                <button className="registration__button" onClick={registerNewUser}>Sign up</button>
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
  )
}

export default EmailForm;