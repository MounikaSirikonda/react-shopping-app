import "./App.css";
import React from "react";
import CartItems from "./cart-items";
import ProductsList from "./products-list";

export default class App extends React.Component {
  state = {
    cart: [],
  };

  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(item, num) {
    const cart = this.state.cart;
    const idx = cart.indexOf(item);
    if (idx === -1) {
      item.quantity = num;
      cart.push(item);
    } else {
      cart[idx].quantity += num;
      if (cart[idx].quantity < 1) {
        cart.splice(idx, 1);
      }
    }
    this.setState({
      cart: cart,
    });
  }

  render() {
    const cart = this.state.cart;
    return (
      <div className="App">
        <header className="App-header">
          <div className="d-flex m-auto">
            <img
              src="https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=6&m=1206806317&s=612x612&w=0&h=Fo7D7nh_QPu758KRdbNTp7m4xSVOxBvJ2cfUvA1_k_U="
              alt="header"
              width="30px"
              height="30px"
            ></img>
            <h4 className="pl-2 text-green">Hacker shop</h4>
          </div>
        </header>
        <div className="d-flex justify-content-between m-3">
          <div className="w-75">
            <ProductsList handleAddToCart={this.handleAddToCart} />
          </div>
          <div className="w-25">
            <CartItems cart={cart} />
          </div>
        </div>
      </div>
    );
  }
}
