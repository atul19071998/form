import React from "react";
import "../component/Login.css";
const Login = () => {
  return (
    // login-wrapper starts here
    <div className="login-wrapper">
      <div className="login-wrap">
        <div className="logo-wrap">
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            alt="logo"
          />
        </div>

        <div className="content-wrap">
          SOME RANDOM TEXT, SOME RANDOM 
          TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT
        </div>
        <div className="btn">
          <div className="loginbtn">Login</div>
          <div className="signupbtn">Signup</div>
        </div>
        <div className="form-wraper">
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
          <button>LOGIN</button>
        </div>
        <div className="password-wrap">Forgot Password?</div>
        <div className="option-wrap">or login with</div>

        <div className="icon-wrapper">
          <div className="icon-1">
            <img
              src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
              alt="..."
            />
          </div>
          <div className="icon-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz3jC-EokI1JN89xYvhrL4xtju6uuNLWyrSw&usqp=CAU"
              alt="..."
            />
          </div>
          <div className="icon-3">
            <img
              src="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg"
              alt="..."
            />
          </div>
        </div>

        <div className="head-wrapper">
          Don't have an account? <span> Create new now!</span>
        </div>
        <div className="heading-wrapper">
          By signing up, you are agree with our <span>Terms & Conditions </span>
        </div>
      </div>
    </div>
    //login-wrapper ends here.
  );
};

export default Login;
