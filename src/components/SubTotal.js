import React, { Component } from "react";

export class subTotal extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div style={{ color: "#6c757d", fontSize: "25px" }}>SubTotal</div>
        </div>
        <div className="col">
          <div style={{ color: "#6c757d", fontSize: "25px" }}>
            $ {this.props.subPrice}{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default subTotal;
