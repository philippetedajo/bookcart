import React, { Component } from "react";

export class Promotion extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div style={{ color: "#6c757d", fontSize: "25px" }}>
            Promo reduction
          </div>
        </div>
        <div className="col">
          <div style={{ color: "#6c757d", fontSize: "25px" }}>
            $ {this.props.reduction}
          </div>
        </div>
      </div>
    );
  }
}

export default Promotion;
