import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [errorList, seterrorList] = useState([]);
  const [user, setuser] = useState({
    first_name: "",
    Last_name: "",
    age: 0,
    email: "",
    password: "",
  });
  const getuser = (e) => {
    let myuser = { ...user };
    myuser[e.target.name] = e.target.value;
    setuser(myuser);
  };
  async function subnitregister(e) {
    e.preventDefault();
    setisLoading(true);
    let validateForm = validateRegister(user);
    if (validateForm.error) {
      setisLoading(false);
      seterrorList(validateForm.error.details);
      console.log(validateForm);
    } else {
      let { data } = await axios.post("http://localhost:1000/posts", user);
      if (data) {
        setisLoading(false);
        navigate("/login");
      } else {
        console.log("errrrrrrrrrrrrrror");
        setisLoading(false);
      }
    }
  }
  function validateRegister() {
    let schema = Joi.object({
      first_name: Joi.string().alphanum().min(3).max(8).required(),
      Last_name: Joi.string().alphanum().min(3).max(8).required(),
      age: Joi.number().min(16).max(80).required(),

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
    return schema.validate(user, { abortEarly: false });
  }
  return (
    <div>
      <div className="container my-5">
        <h2 className="my-5">Register Now</h2>
        {errorList.map((err, ind) => {
          if (ind === 4) {
            return (
              <div key={ind} className="alert alert-danger">
                fadaale password invalid
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
        <form className="py-0" onSubmit={subnitregister}>
          <label className="fs-4" htmlFor="first_name">
            first name :
          </label>
          <input
            // required={true}
            onChange={getuser}
            className="form-control p-3 mb-3 mt-2"
            type="text"
            name="first_name"
            id="first_name"
          />
          <label className="fs-4" htmlFor="Last_name">
            Last name :
          </label>
          <input
            // required={true}
            onChange={getuser}
            className="form-control p-3 mb-3 mt-2"
            type="text"
            name="Last_name"
            id="Last_name"
          />
          <label className="fs-4" htmlFor="age">
            age:
          </label>
          <input
            // required={true}
            onChange={getuser}
            className="form-control p-3 mb-3 mt-2"
            type="number"
            name="age"
            id="age"
          />
          <label className="fs-4" htmlFor="email">
            email :
          </label>
          <input
            // required={true}
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
            // required={true}
            onChange={getuser}
            className="form-control p-3 mb-5 mt-2"
            type="password"
            name="password"
            id="password"
          />
          <button className="btn btn-outline-dark text-white-50" type="submit">
            {isLoading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              "register"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
