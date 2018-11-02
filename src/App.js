import React, { Component } from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import AlbumsListContainer from './components/AlbumsListContainer';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
        <AlbumsListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
