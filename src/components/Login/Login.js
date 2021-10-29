// import React from "react";
// import useFirebase from "../../hooks/useFirebase";

// const Login = () => {
//   const { signInUsingGoogle } = useFirebase();
//   return (
//     <div>
//       <button onClick={signInUsingGoogle} className="btn btn-warning">
//         Google Sign In
//       </button>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const {
    signInUsingGoogle,
    handleUserRegister,
    handleUserLogin,
    handleUserName,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    isLogin
      ? handleUserLogin(email, password)
          .then((result) => {
            console.log(result.user);
            history.push(redirect_url);
          })
          .catch((error) => {
            setError(error.message);
          })
      : handleUserRegister(email, password, name)
          .then((result) => {
            const user = result.user;
            console.log(user);
            handleUserName(name);
            history.push(redirect_url);
            window.location.reload();
          })
          .catch((error) => {
            setError(error.message);
          });
  };
  return (
    <div
      className="text-center container login box-shadow mb-5 mt-5"
      style={{ maxWidth: "600px" }}
    >
      <form onSubmit={handleSignUp}>
        <h3 className="text-info pb-5">
          Please {isLogin ? "Login" : "Register"}
        </h3>
        {!isLogin && (
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                onBlur={handleNameChange}
                type="text"
                className="form-control"
                placeholder=""
                required
              />
            </div>
          </div>
        )}
        <div className="row">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">
            Email        
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleEmailChange}
              type="email"
              className="form-control"
              id="inputName"
              required
            />
          </div>
        </div>
        <div className="row">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password      
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handlePasswordChange}
              type="password"
              className="form-control"
              id="inputPassword3"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                onChange={toggleLogin}
                className="form-check-input "
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Have an Account?          
              </label>
            </div>
          </div>
        </div>
         <div className=" mb-3 text-danger">{error}</div>   
        <button type="submit" className="btn btn-style px-3 ms-auto">
             {isLogin ? "Login" : "Register"}   
        </button>
         <br />   
      </form>
          <br />
           <br /> 
      <button
        className="google center-style rounded-pill px-3 py-3 mx-auto"
        onClick={handleGoogleLogin}
      >
        Continue with Google  
      </button>
    </div>
  );
};

export default Login;
