import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const SingleUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8996/users/${id}`);
    setUser(result.data);
  };

  const { id } = useParams();
  return (
    <div className="container py-4">
      <h1 className="display-4">User Id : {id}</h1>

      <hr />

      <ul className="list-group w-50 text-center text-uppercase">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name : {user.username}</li>
        <li className="list-group-item">email : {user.email}</li>
        <li className="list-group-item">phone : {user.phone}</li>
        <li className="list-group-item">website : {user.website} </li>
      </ul>
      <Link className="btn btn-primary mt-4 mx-auto tet-start" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default SingleUser;
