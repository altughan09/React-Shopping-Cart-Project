import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Subtotal from "./components/Subtotal/Subtotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal"
import ItemDetails from "./components/ItemDetails/ItemDetails";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 100,
      PickupSavings : -2.65,
      taxes:0,
      estimatedTotal:0
    };
  }

  render() {
    return (
      <div className="main">
        <Container className="shopping-cart">
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings.toFixed(2)}/>
          <TaxesFees taxes = {this.state.taxes.toFixed(2)}/>
          <hr/>
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
          <ItemDetails/>
        </Container>
      </div>
    );
  }
}

export default App;
