import React, { Component } from "react";
import { Form, Collapse } from "react-bootstrap";
import styled from "styled-components";

export class FidelityCoupon extends Component {
  render() {
    const codeTyped = this.props.code;
    return (
      <div lassName="col p-0">
        <div className="btn btn-primary" onClick={this.props.onClickFc}>
          {this.props.toogleFc === false
            ? "+ Show Fidelity Coupon"
            : "- Hide Fidelity Coupon"}
        </div>

        <CollapseDiv className="p-0" in={this.props.toogleFc}>
          <div className="row" style={{ margin: "1rem 0" }}>
            <Form style={{ padding: "1rem" }}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Fidelity Coupon</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter code.."
                  value={codeTyped}
                  onChange={this.props.onChangeCode}
                />
                <Form.Text color="primary" className="text-muted">
                  {this.props.alert.length === 0
                    ? "Keep this code in secure place"
                    : this.props.alert}
                </Form.Text>
              </Form.Group>

              <button
                className="btn btn-info"
                type="submit"
                disabled={this.props.disableButton}
                onClick={this.props.onClickApply}
              >
                Apply
              </button>
            </Form>
          </div>
        </CollapseDiv>
      </div>
    );
  }
}

export default FidelityCoupon;

const CollapseDiv = styled(Collapse)`
  border-radius: 10px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`;
