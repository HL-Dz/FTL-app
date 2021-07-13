import React from 'react';
import { useState } from 'react';
import EmailForm from './EmailForm';
import "./SignIn.scss";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasAccount, setHasAccount] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailRegistration, setEmailRegistration] = useState(false);

  const resetFields = () => {
    setEmail('');
    setPassword('');
  }

  const resetErrors = () => {
    setEmailError('');
    setPasswordError('');
  }
  
  return (
    <div className="singIn">
      <div className="signIn__title ">
        {emailRegistration ? "Email section" : "Sign in"}
      </div>
      <div className="signIn__buttons">
        <EmailForm
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          emailError={emailError}
          setEmailError={setEmailError}
          passwordError={passwordError}
          setPasswordError={setPasswordError}
          emailRegistration={emailRegistration}
          setEmailRegistration={setEmailRegistration}
          resetFields={resetFields}
        />
        <button className="signIn__button tfl-email" onClick={() => setEmailRegistration(true)}>
          <span className="fas fa-angle-down signIn__down"></span>
          <span className="signIn__button-text">
            Email
          </span>
          <span className="signIn__cursor far fa-hand-point-left"></span>
        </button>
        <button className="signIn__button tfl-google">
          <span className="signIn__button-text">
            Google
          </span>
          <span className="signIn__cursor far fa-hand-point-left"></span>
        </button>
        <button className="signIn__button tfl-github">
          <span className="signIn__button-text">
            GitHub
          </span>
          <span className="signIn__cursor far fa-hand-point-left"></span>
        </button>
        <button className="signIn__button tfl-facebook">
          <span className="signIn__button-text">
            Facebook
          </span>
          <span className="signIn__cursor far fa-hand-point-left"></span>
        </button>
        <button className="signIn__button tfl-twitter">
          <span className="signIn__button-text">
            Twitter
          </span>
          <span className="signIn__cursor far fa-hand-point-left"></span>
        </button>
      </div>
    </div>
  )
}

export default SignIn;