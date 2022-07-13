import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

class CurrentPatients extends Component {
    render() {
        return (
            <>
            <div className="current-patient-container">
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className="current-patient-header">Current patients</div>
                    <div>
                        <span style={{marginRight: '10px'}}><i className="fa fa-sort-alpha-down" aria-hidden="true"></i></span>
                        <span><i className="fa fa-sort-amount-up" aria-hidden="true"></i></span>
                    </div>
                </div>
                <div className="current-patient-list">
                {this.props.patientList.map((item) => (
                    <MDBRow style={{marginTop: '20px'}}>
                        <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div className="">
                                        <img src={item.picture.thumbnail} style={{width:"40px"}} />
                                    </div>
                                    <div>
                                        <div className="patient-name">{`${item.name.first} ${item.name.last}`}</div>
                                        <div className="patient-address">{`${item.location.country}, ${item.location.state}, ${item.location.city}`}</div>
                                    </div>
                                    <div className="mobile-number">{item.cell}</div>
                                    <div className="department">{item.email}</div>
                                    <div className="department">{item.gender}</div>
                                    <div>
                                        <MDBIcon icon="phone" className='phone' />
                                        <MDBBtn outline color="primary" size='sm'>Message</MDBBtn>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                    </MDBRow>
                ))}
                </div>
            </div>
            </>
        )
    }
};

export default CurrentPatients;