import React from 'react';
import Popup from 'reactjs-popup';
import '../popup/style.css';
class Exchangepopup extends React.Component {
    render() {
        return <div className="model">
            <Popup trigger={<button>Buy with Exchange</button>} modal>
                {close =>
                    <div>
                        <a className="close" onClick="close">
                            &times;
                   </a>
                        <div className="header"> Exchange offer </div>
                        <div className="header"> user enter old laptap details </div>
                        <div className="content">
                            {" "}
          Lenovo
          <br></br>
          Intel Core I3
          <br></br>
          Enter Serial Number
          <br></br>
          Price
          <br></br>
          Exchange Discount
          <br></br>
          Pickup Change
          <br></br>
          Total amount payable
        </div>
                        <button
                            className="button"
                            onClick={() => {
                                console.log("modal closed ");
                                close();
                            }}
                        >
                            Exchange and Buy
          </button>
                    </div>
                }
            </Popup>

        </div>

    }
}
export default Exchangepopup;