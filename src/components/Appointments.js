import React, {Component} from "react";
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

class Appointments extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="appointments-container">
                    <MDBCard>
                        <MDBCardBody>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div className="appointments-header">Appointments</div>
                            <div>
                                <span className="view-all-text">View All<span style={{marginLeft: '5px'}}><MDBIcon icon="angle-down" /></span></span>
                            </div>
                        </div>
                        <div style={{marginTop:'10px', marginLeft:'-6px'}}>
                            <MDBBtn className="btn-one" color="primary" size='sm'>Upcoming</MDBBtn>
                            <MDBBtn className="btn-two" outline color="primary" size='sm'>Past</MDBBtn>
                        </div>
                        <div className="appointments-list">
                        {this.props.patientList.map((item) => (
                            <MDBRow style={{marginTop: '20px'}}>
                                <MDBCol>
                                <MDBCard>
                                    <MDBCardBody>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <div className="">
                                                <img src={item.picture.thumbnail} style={{width:"40px"}} />
                                            </div>
                                            <div style={{marginLeft: '10px'}}>
                                                <div className="patient-name">{`${item.name.first} ${item.name.last}`}</div>
                                                <div className="patient-address">{`${item.gender}`}</div>
                                            </div>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        ))}
                        </div>
                        </MDBCardBody>
                    </MDBCard>
                </div>
        )
    }
}

export default Appointments;