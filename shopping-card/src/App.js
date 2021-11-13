import React from "react";
import { Switch, Route, Redirect } from "react-router";
import "./App.css"
// Components
import Store from "./components/Store/Store";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Shopcard from "./components/ShopCard/Shopcard";


// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CardContextProvider from "./context/CardContextProvider";

const App = () => {
  return (
    <ProductContextProvider>
      <CardContextProvider>
        <div className="main">
        <Switch>
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/products" component={Store} />
          <Route path="/card" component={Shopcard} />
          <Redirect to="/products" />
        </Switch>
        </div>
      </CardContextProvider>
    </ProductContextProvider>
  );
};

export default App;
