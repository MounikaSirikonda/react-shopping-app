import React from "react";

export default class CartItems extends React.Component {
  render() {
    const cart = this.props.cart;

    return (
      <div className="card my-3">
        <h2>Your Cart</h2>
        <table className="table">
          <thead>
            <th></th>
            <th>Item</th>
            <th>Quantity</th>
          </thead>
          <tbody>
            {cart.length > 0 &&
              cart.map((cartItem, idx) => (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{cartItem?.name}</td>
                  <td>{cartItem?.quantity}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
