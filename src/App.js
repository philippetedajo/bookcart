import React, { Component } from "react";
import {
  SubTotal,
  Promotion,
  Taxe,
  Total,
  Details,
  FidelityCoupon,
} from "./components";
import { Helmet } from "react-helmet";
import styled from "styled-components";

export class App extends Component {
  state = {
    //Facture
    subTotal: 440.2342,
    reduction: -17.453464,
    fees: 0,
    total: 129.3425,
    //Details
    isDetailShow: false,
    //Fidelidty coupon
    isFcShow: true,
    isApplyDisable: false,
    codeTyping: "",
    originalCode: "3453F",
    alertMessage: "",
  };

  componentDidMount = () => {
    this.setState(
      {
        fees: (this.state.subTotal + this.state.reduction) * 0.015,
      },
      function () {
        this.setState({
          total: this.state.subTotal + this.state.reduction + this.state.fees,
        });
      }
    );
  };

  //Details
  handleOnClickDetails = () => {
    this.setState({ isDetailShow: !this.state.isDetailShow });
  };

  //FidelityCoupon
  handleOnclickFc = () => {
    console.log("hello");
    this.setState({ isFcShow: !this.state.isFcShow });
  };

  handleOnApply = (event) => {
    event.preventDefault();
    this.setState({ isApplyDisable: true });

    this.state.codeTyping === this.state.originalCode
      ? this.setState({ total: this.state.total * 0.95 }, function () {
          this.setState({
            alertMessage:
              "Your reduction has been applied ! Thanks you for your Fidelity !",
          });
        })
      : this.setState({ alertMessage: "Wrong Code Coupon ! " });
  };

  handleOnChangeCode = (event) => {
    this.setState({ codeTyping: event.target.value });
  };

  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>BookCart</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Content className="container">
          <h1 style={{ fontSize: "55px", color: "teal" }} className="mb-4">
            BookCart
          </h1>

          <SubTotal subPrice={this.state.subTotal.toFixed(2)} />
          <Promotion reduction={this.state.reduction.toFixed(2)} />
          <Taxe fees={this.state.fees.toFixed(2)} />
          <Total price={this.state.total.toFixed(2)} />
          <Details
            price={this.state.total.toFixed(2)}
            toggleDetail={this.state.isDetailShow}
            //func props
            onClikDetails={this.handleOnClickDetails}
          />
          <FidelityCoupon
            toogleFc={this.state.isFcShow}
            disableButton={this.state.isApplyDisable}
            alert={this.state.alertMessage}
            //func props
            onClickFc={this.handleOnclickFc}
            onClickApply={this.handleOnApply}
            onChangeCode={this.handleOnChangeCode}
          />

          <p
            className="mb-2 mt-2"
            style={{ color: "#6c757d", fontSize: "15px" }}
          >
            Fidelity Code : {this.state.originalCode}{" "}
          </p>
        </Content>
      </>
    );
  }
}

export default App;

const Content = styled.div`
  background-color: #f8f7f5 !important;
  margin-top: 3rem;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
