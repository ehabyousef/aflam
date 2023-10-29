import React from "react";
import "./Contact.module.css";
const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 my-4">
            <input type="text" className="form-control fs-4" id="text" />
            <label for="text" className="form-label">
              name
            </label>
          </div>
          <div className="col-6 my-4">
            <input type="number" className="form-control fs-4" id="phone" />
            <label for="phone" className="form-label">
              phone
            </label>
          </div>
          <div className="col-12">
            <input type="email" className="form-control fs-4" id="email" />
            <label for="email" className="form-label">
              you Email
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control fs-4"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit">submit</button>
      </div>
    </>
  );
};

export default Contact;
