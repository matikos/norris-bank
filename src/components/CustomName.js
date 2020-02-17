import React, { Component } from 'react';
import './CustomName.css';

class CustomName extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        firstName: '',
        secondName: '',
        customJoke: '',
    };
  }
  onHome = () => {
    this.props.history.push('/')
  }

  handleSubmit = (event) => {
    let firstName = event.target.value
      .split(' ')
      .slice(0, -1)
      .join(' ');

    let secondName = event.target.value
      .split(' ')
      .slice(-1)
      .join(' ');

      this.setState({
        firstName: firstName,
        secondName: secondName,
      })
      console.log(this.state.firstName);

    const url = `http://api.icndb.com/jokes/random?escape=javascript?firstName=${this.state.firstName};lastName=${this.state.secondName}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          customJoke: data.value.joke,
        })
      })
      .catch((err) => {
        console.log(err)
      });
  }


  
  render() {
    return (
      <div className="CustName">
        <header className="CustName-header">
          <h1 className="Custname-title">Norris Bank</h1>
        </header>
        <hr />
        <form>
          <label>
            Name:
            <input type="text" />
          </label>
          <input type="submit" value="Search" onClick={event => this.handleSubmit(event)}/>
        </form>
        <p>{this.state.customJoke}</p>
        <button onClick={() => this.onHome()}>Home</button>
      </div>
    );
  }
}

export default CustomName;
