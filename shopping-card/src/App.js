import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
// Components
import Store from './components/Store/Store'
import ProductDetail from './components/ProductDetail/ProductDetail';

// Context
import ProductContextProvider from './context/ProductContextProvider';
const App = () => {
  return (
    <ProductContextProvider>
        <Switch>
          <Route path="/products/:id" component={ProductDetail}/>
          <Route path="/products" component={Store}/>
          <Redirect to="/products" />
        </Switch>
    </ProductContextProvider>
  );
};

export default App;