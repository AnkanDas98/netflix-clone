import React, { useRef, useState } from "react";

import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="/images/Netflix_logo.png"
            alt="Netflix Logo"
            className="logo"
          />
        </div>
      </div>

      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="password" />
          <button className="loginButton">Sign In</button>

          <span>
            New to Netflix <b>Sign up Now</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
