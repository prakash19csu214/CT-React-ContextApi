import React, { useState, useEffect, createContext } from "react";
import Form from "../../Pages/Form";
import Table from "../../Pages/Table";
import { Switch, Route, Redirect } from "react-router-dom";

import { httpHelper } from "../../Middleware/httpHelper";

// Creating Context Api's

const GetUsers = createContext();
const PostUser = createContext();
const PutUser = createContext();
const DeleteUser = createContext();

const CrudUser = () => {
  const [users, setUsers] = useState(null);

  const url = "http://localhost:5000/users";
  const api = httpHelper();

  useEffect(() => {
    getUsers();
  }, []);




  const postUser = (user) => {
    api
      .post(`${url}`, { body: user })
      .then((res) => getUsers())
      .catch((err) => console.log(err));
  };

  const updateUser = (id, user) => {
    api
      .put(`${url}/${id}`, { body: user })
      .then((res) => getUsers())
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    api
      .del(`${url}/${id}`, {})
      .then((res) => getUsers())
      .catch((err) => console.log(err));
  };

  const getUsers = () => {
    api
      .get(`${url}`)
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => console.log(err));
  };

  if (!users) return null;

  return (
    <>
      {/* context api's providers */}
        <PostUser.Provider value={postUser}>
          <PutUser.Provider value={updateUser}>
            <DeleteUser.Provider value={deleteUser}>
              <Switch>
                <Route
                  path="/form"
                  component={() => <Form />}
                />
                <Route
                  path="/home"
                  component={() => (
                    <div className="all-users">
                      <h3 style={{ float: "left", color: "rgb(54, 54, 122)" }}>
                        {" "}
                        <b> USERS </b>
                      </h3>
                      <a href="/form">
                        <button className="btn btn-lg my-2 float-right text-white">
                          {" "}
                          <b> CREATE </b>
                        </button>
                      </a>

                      <Table users={users} />
                    </div>
                  )}
                />
                <Redirect to="/home" />
              </Switch>
            </DeleteUser.Provider>
          </PutUser.Provider>
        </PostUser.Provider>
    </>
  );
};

export default CrudUser
export {GetUsers, PostUser, PutUser, DeleteUser}
