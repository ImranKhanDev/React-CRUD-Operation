/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { name, username, email, phone, website } = user;

  const { id } = useParams();
  let history = useNavigate();

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    alert("user updated sucessfully !!");
    e.preventDefault();
    const result = await axios.put(`http://localhost:8996/users/${id}`, user);
    history.push("/");
    
  };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8996/users/${id}`);
    setUser(result?.data);
    // console.log(result);
  };
  return (
    <div className="mx-auto container py-5">
      <h2>Edit User.</h2>
      <form onSubmit={onSubmit} className="bordered shadow py-5">
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg mx-auto"
            style={{ width: "50%" }}
            placeholder="Enter your name"
            name="name"
            // eslint-disable-next-line no-restricted-globals
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg mx-auto"
            style={{ width: "50%" }}
            placeholder="Enter your username"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg mx-auto"
            style={{ width: "50%" }}
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg mx-auto"
            placeholder="Enter your number"
            style={{ width: "50%" }}
            name="phone"
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="website"
            className="form-control form-control-lg mx-auto"
            placeholder="Enter your website name"
            style={{ width: "50%" }}
            name="website"
            value={website}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <br />
        <Button
          onClick={onSubmit}
          className="btn btn-outline-warning btn-lg mt-3"
        >
          update user
        </Button>
      </form>
    </div>
  );
};

export default EditUser;
