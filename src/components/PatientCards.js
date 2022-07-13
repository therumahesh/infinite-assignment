import React from "react";
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const PatientCards = () => {
    return(
        <>
        <MDBRow style={{marginTop: '20px'}}>
          <MDBCol sm='12' md='4' lg='4' className="cardItems">
          <MDBCard>
              <MDBCardBody>
                <div style={{display: 'flex'}}>
                    <div><MDBIcon className="fas fa-heartbeat chart-pie" icon="chart-pie" /></div>
                    <div style={{marginLeft: '20px'}}>
                        <div>
                            <span className="number">324</span>
                            <span className="percentage">+12%</span>
                        </div>
                        <div className="description">Patients per month</div>
                    </div>
                </div>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol sm='12' md='4' lg='4' className="cardItems">
        <MDBCard>
              <MDBCardBody>
                <div style={{display: 'flex'}}>
                    <div><i className="fa fa-signal chart-pie" aria-hidden="true"></i></div>
                    <div style={{marginLeft: '20px'}}>
                        <div>
                            <span className="number">159</span>
                            <span className="percentage">+2%</span>
                        </div>
                        <div className="description">New Patients</div>
                    </div>
                </div>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol sm='12' md='4' lg='4' className="cardItems">
        <MDBCard>
              <MDBCardBody>
                <div style={{display: 'flex'}}>
                    <div><MDBIcon className="fas fa-heartbeat chart-pie" icon="chart-pie" /></div>
                    <div style={{marginLeft: '20px'}}>
                        <div>
                            <span className="number">165</span>
                            <span className="percentage" style={{background: '#db1962', color: '#FFF'}}>-24%</span>
                        </div>
                        <div className="description">Patients per month</div>
                    </div>
                </div>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </MDBRow>
        </>
    )
}

export default PatientCards