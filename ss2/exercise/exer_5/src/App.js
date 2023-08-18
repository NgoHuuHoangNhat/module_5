import logo from './logo.svg';
import './App.css';
import React from "react";
function App() {
  return (
    <div>
      <div className="container justify-content-center mx">
        <div className="mt-3" style={{ width: "25%" }}>

          <div className="d-flex justify-content-center mb-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
              style={{ maxWidth: "20%", maxHeight: "20%" }} />
          </div>
          <div className="d-flex justify-content-center">
            <h2>Please Sign in</h2>
          </div>
          <div className="">

            <input className="form-control" type="text" placeholder="Email address" />
            <input className="form-control" type="password" placeholder="Password" />
            <label className="d-flex justify-content-center mt-2" for="checkbox"><input className="form-checkbox" id="checkbox" type="checkbox" />Remember Me</label><br />
            <button type="submit" style={{ width: "100%" }} className="btn btn-primary">Sign in</button>

          </div>

        </div>
      </div>
    </div>

  );
}

export default App;
