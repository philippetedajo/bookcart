import React, { Component } from "react";

export class Taxes extends Component {
  render() {
    return (
      <row className="row">
        <div className="col">
          <div style={{ color: "#6c757d", fontSize: "25px" }}>
            Import Taxes Fees
          </div>
        </div>
        <div className="col">
          <div style={{ color: "#6c757d", fontSize: "25px" }}>
            $ {this.props.fees}
          </div>
        </div>
      </row>
    );
  }
}

export default Taxes;
