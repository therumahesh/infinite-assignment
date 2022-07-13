import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBCollapse, MDBIcon} from "mdbreact";

class NavbarPage extends Component {
render() {
  return (
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <MDBIcon className="fas fa-heartbeat heart-icon"></MDBIcon>
          <strong className="white-text">H.Care</strong>
        </MDBNavbarBrand>
        <MDBCollapse navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              Dashboard
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
        <MDBNavbarNav right className="navbaricons">
          <span className="notificationbadge"><MDBIcon className="far fa-bell"></MDBIcon></span>
          <span className="notificationbadge"><MDBIcon className="fa far fa-envelope"  icon="envelope" /></span>
                <div className="userprofileicons counter-texticon menu-icon">
                  <span>AM</span>
                </div>
          <span className="user-details">Alice Morgan<span style={{marginLeft: '5px'}}><MDBIcon icon="angle-down" /></span></span>
            </MDBNavbarNav>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;