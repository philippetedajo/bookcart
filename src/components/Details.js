import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import styled from "styled-components";
import Product from "../assets/book2_4x.jpg";

export class Details extends Component {
  render() {
    return (
      <div className="p-0">
        <button
          type="button"
          className="btn btn-primary mb-2"
          onClick={this.props.onClikDetails}
        >
          {this.props.toggleDetail === false
            ? "+ Show details"
            : "- Hide details"}
        </button>

        <CollapseDiv in={this.props.toggleDetail}>
          <div className="row" style={{ padding: "1rem", margin: "1rem 0" }}>
            <div className="col-4 p-0">
              <img
                width={128}
                className="mr-3 p-1"
                src={Product}
                alt="product"
              />
              <div style={{ fontWeight: 600 }}>Qte: 1</div>
              <div style={{ fontWeight: 600 }}>Price: $ {this.props.price}</div>
            </div>

            <div className="col-8">
              <h4>From Idea to Digital Product</h4>
              <div style={{ textAlign: "justify" }}>
                A digital product is born from a spark of geniosity, better
                known as an idea. The transformation of this idea into a digital
                product is the process that can destine it to success or
                failure. Discover this amazing Book now!
              </div>
            </div>
          </div>
        </CollapseDiv>
      </div>
    );
  }
}

export default Details;

const CollapseDiv = styled(Collapse)`
  border-radius: 10px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  background: #f8f7f5;
`;
