import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    refreshUsersList();
  }, []);
  const refreshUsersList = async () => {
    const result = await axios.get("http://localhost:8996/users");
    setUsers(result.data.reverse());
  };

  // delete user
  const deletUser = async (id) => {
    await axios.delete(`http://localhost:8996/users/${id}`);
    refreshUsersList();
  };

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr>
              <th scope="row"> {index + 1}</th>
              <td>{user?.name}</td>
              <td>{user?.username}</td>
              <td>{user?.email}</td>
              <td>
                <Link
                  style={{ marginRight: "10px" }}
                  className="btn btn-primary"
                  to={`/users/${user.id}`}
                >
                  View
                </Link>
                <Link
                  style={{ marginRight: "10px" }}
                  to={`/users/edit/${user.id}`}
                  className="btn btn-outline-warning"
                >
                  Edit
                </Link>
                <Link
                  style={{ marginRight: "10px" }}
                  to="/"
                  className="btn btn-danger"
                  onClick={() => deletUser(user.id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
