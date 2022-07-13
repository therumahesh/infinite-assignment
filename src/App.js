import React, { Component, Fragment } from 'react';
import NavbarPage from './components/NavbarPage';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/react-fontawesome";
import PatientCards from './components/PatientCards';
import CurrentPatients from './components/CurrentPatients';
import { MDBRow, MDBCol } from 'mdbreact';
import Appointments from './components/Appointments';
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        patientList: []
    }
}
  componentDidMount(){
    axios.get('https://randomuser.me/api/?results=20').then((response) => {
   this.setState({patientList: response.data.results});
   console.log(response, 'response')
 });
}
  render() {
    return (
      <Fragment>
          <NavbarPage />
          <div className ="container-section">
            <MDBRow>
            <MDBCol sm="12" md="12" lg="9" xl="9">
              <PatientCards />
              <CurrentPatients patientList={this.state.patientList} />
            </MDBCol>
            <MDBCol sm="12" md="12" lg="3" xl="3">
              <Appointments patientList={this.state.patientList} />
            </MDBCol>
            </MDBRow>
          </div>
      </ Fragment>
    );
  }
}

export default App;