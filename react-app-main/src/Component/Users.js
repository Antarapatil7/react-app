import React, { useEffect, useState } from "react";
import "../App.css";

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Fetch User Data From API
  const fetchUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const result = await response.json();
    console.log(result.data);
    setIsLoading(false);
    setUsersData(result.data);
  };
  //useEffect
  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 2000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <div class="spinner-grow loader-clr" role="status">
            {/* <span class="visually-hidden">Loading...</span> */}
          </div>
        </div>
      ) : (
        <div className="container mt-3">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h2 className="fw-bold pb-3 h1 text-white"> List of Users </h2>
          </div>
          <div className="row pb-5">
            {usersData.map((user, index) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 my-3">
                  <div style={{background: "hsl(250, 30%, 8%)", height: "400px"}} className="card p-3 text-white w-100" id={index}>
                    <div className="d-flex flex-column my-auto align-items-center">
                      <div className="image">
                        <img
                          src={user.avatar}
                          className="rounded rounded-circle"
                          width="150"
                          alt=""
                        />
                      </div>
                      <div className="ml-3 w-100 my-3 text-center">
                        <h4 className="mb-0 mt-0">
                          {user.first_name} {user.last_name}
                        </h4>
                        <span className="text-muted"> {user.email} </span>
                        <div className="button mt-2 d-flex flex-row justify-content-center pt-4">
                          <button style={{color: "hsl(250, 69%, 61%)"}} className="btn btn-sm fw-bold w-25 rounded btn-line">
                            Chat
                          </button>
                          <button style={{background: "hsl(250, 69%, 61%)"}} className="btn btn-sm fw-bold text-white w-25 ml-2">
                            Follow
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
