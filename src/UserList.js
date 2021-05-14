import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "./UserList.css";
function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="list">
      <div className="row">
        <img src="/images/log.png" alt="logo" />
        <h1>list des utilisateur</h1>
      </div>

      <ul>
        <div className="base" border-width="thin">
          <Table>
            <thead>
              <tr className="trr">
                <th>Identifiant </th>
                <th>Nom</th>
                <th>prénom</th>
                <th>Email</th>
                <th>Adresse</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>
                  <td>{user.id}</td>

                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </ul>
    </div>
  );
}

export default UserList;
