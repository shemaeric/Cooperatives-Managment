import React, { Component, Fragment } from "react";
import Nav from "../Containers/Nav";
import logo from "../../assets/images/logo.png";

class Signin extends Component {
  render() {
    return (
      <Fragment>
        <Nav text1 = "Sign up" text2 = "Home"/>
        <div className="col-12 signup-container">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center height">
                <div className = "mt-4">
                    <img src={logo}></img>
                    <p className="signup-title">
                  Ea-africa exchange Trading commodities
                </p>
                <p className="sub">Login Here</p>
                </div>
                <div className="signup-form mt-5">
                    <div className="pt-5 pr-3 pl-3 pb-3">
                    <form>
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
                  <button className="signup-btn">Sign In</button>
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

export default Signin;
