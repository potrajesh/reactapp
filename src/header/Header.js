import React from 'react';
import '../header/style.css';
import { MDBCol } from "mdbreact";
class Header extends React.Component {

    render(){
      return (
        <MDBCol md="6">
          <div className="active-pink-3 active-pink-4 mb-4">
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
          </div>
        </MDBCol>
      );
    }
}
    export default Header;