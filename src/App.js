import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
  }
}

export default App;
