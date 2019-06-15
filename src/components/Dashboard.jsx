import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faUserFriends, faTractor, faBuilding, faStore, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Containers/Nav";
import profile from "../assets/images/Herve.png";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Nav text1 = "Settings" text2 = "Sign out"/>
        <div className="col-12 signup-container">
            <div className= "aside">
                <div className="top-head text-center">
                    <img src={profile} className="pt-3"></img>
                    <p>Iradukunda Herve Jules<br></br><button className="font-btn"><FontAwesomeIcon icon={faEdit}/></button></p>
                </div>
                <div className="main-items">
                    <div className="side-items">
                        <div className="side-fa">
                        <FontAwesomeIcon icon={faUserFriends} />
                        </div>
                        <div className="side-par">
                            <p>Membership</p>
                        </div>
                    </div>
                    <div className="side-items mt-3">
                        <div className="side-fa">
                        <FontAwesomeIcon icon={faTractor} />
                        </div>
                        <div className="side-par">
                            <p>Cooperatives</p>
                        </div>
                    </div>
                    <div className="side-items mt-3">
                        <div className="side-fa">
                        <FontAwesomeIcon icon={faBuilding} />
                        </div>
                        <div className="side-par">
                            <p>Companies</p>
                        </div>
                    </div>
                    <div className="side-items mt-3">
                        <div className="side-fa">
                        <FontAwesomeIcon icon={faStore} />
                        </div>
                        <div className="side-par">
                            <p>Store</p>
                        </div>
                    </div>
                    <div className="side-items mt-3">
                        <div className="side-fa">
                        <FontAwesomeIcon icon={faBullhorn} />
                        </div>
                        <div className="side-par">
                            <p>Auction</p>
                        </div>
                    </div>
                    
                </div>
                <p className="bottom">
                  Ea-africa exchange Trading commodities
                </p>
            </div>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
