import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="text-start">
      <Container>
        <h1 className="text-start">Contact page</h1>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label text-start">
              Email address
            </label>
            <input
              type="email"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ width: "60%" }}
            />
            <div id="emailHelp" className="form-text text-start">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label
              for="exampleInputPassword1"
              className="form-label text-start"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control text-start"
              id="exampleInputPassword1"
              style={{ width: "60%" }}
            />
          </div>
          <div className="mb-3 form-check text-start">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label text-start" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary text-start">
            Submit
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
