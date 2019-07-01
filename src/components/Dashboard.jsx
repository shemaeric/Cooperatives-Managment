import React, { Component, Fragment } from "react";
import Nav from "./Containers/Nav";
import profile from "../assets/images/Herve.png";
import Card from "./Containers/card";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Nav text1="Settings" text2="Sign out" />
        <div className="container-fluid">
          <div className="col-12 signup-container">
            <div className="row">
              <div className="aside">
                <div className="top-head bg-info shadow rounded text-center">
                  <img src={profile} alt="" className="pt-3" />
                  <p className="btn btn-outline-light mt-4 mb-4">
                    Iradukunda Herve Jules <i class="zmdi zmdi-edit" />
                  </p>
                </div>
                <div className="main-items mt-3">
                  <div className="btn-dark p-2 mb-2 text-center">
                    <i class="zmdi zmdi-male-female zmdi-hc-1x" />
                    <span className="pl-2">Membership</span>
                  </div>
                  <div className="btn-dark p-2 mb-2 text-center">
                    <i class="zmdi zmdi-truck zmdi-hc-1x" />
                    <span className="pl-2">Cooperatives</span>
                  </div>

                  <div className="btn-dark p-2 mb-2 text-center">
                    <i class="zmdi zmdi-receipt zmdi-hc-1x" />
                    <span className="pl-2">Companies</span>
                  </div>

                  <div className="btn-dark p-2 mb-2 text-center">
                    <i class="zmdi zmdi-storage zmdi-hc-1x" />
                    <span className="pl-2">Store</span>
                  </div>

                  <div className="btn-dark p-2 mb-2 text-center">
                    <i class="zmdi zmdi-store zmdi-hc-1x" />
                    <span className="pl-2">Auction</span>
                  </div>
                </div>
                <p className="bottom">Ea-africa exchange Trading commodities</p>
              </div>
              <section className="mt-5 mx-auto">
                <Card
                  img={profile}
                  bio="
                Lorem ipsum dolor sit, amet"
                  title="Iradukunda"
                  subTitle="Student"
                  username="Herve"
                  email="iradukunda@gmail.com"
                />
              </section>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
