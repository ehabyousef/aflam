import Joi from "joi";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../Context";
const Login = () => {
  const navigate = useNavigate();
  const { userValues, getUserData } = useContext(userContext);
  const [isLoading, setisLoading] = useState(false);
  const [errorList, seterrorList] = useState([]);
  const [userDetails, setuserDetails] = useState({
    email: "",
    password: "",
  });
  const [alertfalse, setalertfalse] = useState(false);
  const getuser = (e) => {
    let myuser = { ...userDetails };
    myuser[e.target.name] = e.target.value;
    setuserDetails(myuser);
  };

  async function submitLogin(e) {
    e.preventDefault();
    setisLoading(true);
    let validateForm = validateLogin(userDetails);
    if (validateForm.error) {
      setisLoading(false);
      seterrorList(validateForm.error.details);
    } else {
      let isExist = false;
      userValues.forEach((ele) => {
        if (
          ele.email === userDetails.email &&
          ele.password === userDetails.password
        ) {
          isExist = true;
        }
      });
      const userAllData = userValues.filter(
        (x) => x.email === userDetails.email
      );
      if (isExist) {
        setisLoading(false);
        localStorage.setItem("userToken", JSON.stringify(userAllData));
        navigate("/home");
        getUserData();
      } else {
        setisLoading(false);
        setalertfalse(true);
      }
    }
  }

  function validateLogin() {
    let schema = Joi.object({
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,10}$"))
        .required(),
    });
    return schema.validate(userDetails, { abortEarly: false });
  }
  return (
    <div>
      <div className="container my-5">
        <h2 className="my-5">Login Now</h2>
        {alertfalse && (
          <div className="alert alert-danger">Invalid email or password</div>
        )}
        {errorList.map((err, ind) => {
          if (ind === 1) {
            return (
              <div key={ind} className="alert alert-danger">
                password invalid
              </div>
            );
          } else {
            return (
              <div key={ind} className="alert alert-danger">
                {err.message}
              </div>
            );
          }
        })}
        <form className="py-0" onSubmit={submitLogin}>
          <label className="fs-4" htmlFor="email">
            email :
          </label>
          <input
            onChange={getuser}
            className="form-control p-3 mb-5 mt-2"
            type="email"
            name="email"
            id="email"
          />
          <label className="fs-4" htmlFor="password">
            password :
          </label>
          <input
            onChange={getuser}
            className="form-control p-3 mb-5 mt-2"
            type="password"
            name="password"
            id="password"
          />
          <button className="btn btn-outline-dark" type="submit">
            {isLoading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
