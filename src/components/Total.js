import React, { Component } from "react";

export class Total extends Component {
  render() {
    return (
      <div className="row mb-4">
        <div className="col">
          <div style={{ color: "#6c757d", fontSize: "45px" }}>Total : </div>
        </div>
        <div className="col">
          <div style={{ color: "#6c757d", fontSize: "37px" }}>
            $ {this.props.price}
          </div>
        </div>
      </div>
    );
  }
}

export default Total;
