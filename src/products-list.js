import axios from "axios";
import React from "react";

export default class ProductsList extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios
      .get("https://run.mocky.io/v3/0ce001c0-4662-44f5-b6a8-98d732bde38f")
      .then((res) => {
        console.log("response: ", res);
        const prodList = res.data;
        this.setState({
          products: prodList,
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.products.map((product, i) => (
            <div className="col-sm-4" key={i}>
              <div className="card p-2 my-3">
                <img
                  className="py-2 mx-auto"
                  src={product?.image}
                  alt={product?.name}
                  width="150px"
                  height="150px"
                ></img>

                <p>{product?.name}</p>
                <h6>$ {product?.price}</h6>
                {product?.quantity < 1 ? (
                  <button
                    className="btn mx-auto w-75 btn-outline-success cursor-pointer"
                    onClick={(e) => this.props.handleAddToCart(product, 1)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div>
                    <button
                      className="round-button mx-3"
                      onClick={(e) => this.props.handleAddToCart(product, -1)}
                    >
                      <span>-</span>
                    </button>
                    <input
                      type="text"
                      className="text-center w-25"
                      disabled
                      value={product?.quantity}
                    />
                    <button
                      className="round-button mx-3"
                      onClick={(e) => this.props.handleAddToCart(product, 1)}
                    >
                      <span>+</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
