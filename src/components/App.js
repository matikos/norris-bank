import React, { Component } from 'react';
import './App.css';
import Joke from './Joke';

class App extends Component {
  onSearch = () => {
    this.props.history.push('/customname');
  }
  onRandom = () => {
    window.location.reload(false);
    console.log("random")
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Norris Bank</h1>
        </header>
        <hr />
        <Joke />
        <button className="Button" onClick={() => this.onRandom()}>Random</button>
        <button className="Button" onClick={() => this.onSearch()}>Search Joke</button>
      </div>
    );
  }
}

export default App;
