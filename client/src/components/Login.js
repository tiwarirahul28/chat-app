import React from "react";

const Login = ({ handleChange, logNewUser, newUser }) => {
  return (
    <>
      <div className="card w-100 text-center border-white">
        <div className="row">
          <div className="col-12">
            <h5 className="text-center">Enter Username</h5>
          </div>
          <div className="d-flex justify-content-center py-1">
            <div className="col-4">
              <input
                type="text"
                name="username"
                value={newUser}
                className="form-control mb-3"
                placeholder="Username"
                autoComplete="off"
                onChange={handleChange}
                onKeyPress={(e) => (e.code === "Enter" ? logNewUser() : null)}
              />
              <button
                className="btn btn-success w-100"
                onClick={logNewUser} // Added onClick handler
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
