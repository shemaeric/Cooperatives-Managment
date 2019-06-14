import React, { Component, Fragment } from "react";
import Nav from "../Containers/Nav";
import logo from "../../assets/images/logo.png";

class Signup extends Component {
  render() {
    return (
      <Fragment>
        <Nav text1 = "Login" text2 = "Home"/>
        <div className="col-12 signup-container">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center height">
                <p className="signup-title">
                  Ea-africa exchange Trading commodities
                </p>
                <p className="sub">Sign up Here</p>
                <div className="signup-form">
                    <div className="pt-5 pr-3 pl-3 pb-3">
                    <form>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control text-center"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control text-center"
                      id="exampleInputPassword1"
                      placeholder="Last Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control text-center"
                      id="exampleInputPassword1"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control text-center"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="address"
                      class="form-control text-center"
                      id="exampleInputPassword1"
                      placeholder="Address"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control text-center"
                      id="exampleInputPassword1"
                      placeholder="Telephone"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control text-center"
                      id="exampleInputPassword1"
                      placeholder="ID"
                    />
                  </div>
                  <button className="signup-btn">Sign up</button>
                </form>
                    </div>
                </div>
                <div className="m-auto pt-4">
                <p className="sub">forgot Password ?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Signup;
