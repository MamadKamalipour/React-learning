import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Product extends Component {
  render() {
    return (
      <div>
        <h1>Product page</h1>
        <ul>
          <li>
            <Link to="/shop/product-1">Product1</Link>
          </li>
          <li>
            <Link to="/shop/product-2">Product2</Link>
          </li>
          <li>
            <Link to="/shop/product-3">Product3</Link>
          </li>
          <li>
            <Link to="/shop/product-4">Product4</Link>
          </li>
        </ul>
      </div>
    );
  }
}
