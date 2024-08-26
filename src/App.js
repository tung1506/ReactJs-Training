import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ItemList from './components/Itemlist';
import './index.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ItemList />
      </Provider>
    );
  }
}

export default App;
