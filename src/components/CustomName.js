import React, { Component } from 'react';
import './CustomName.css';

class CustomName extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        input: '',
        names: '',
        firstName: '',
        secondName: '',
        alert:  '',
        customJoke: [],
    };
  }
  onHome = () => {
    this.props.history.push('/')
  }

  handleChange = (e) => {
    
    let names = e.target.value.split(' ');
    let firstName = names[0];
    let secondName = names[names.length - 1];
    
    this.setState({
      input: e.target.value,
      names: names,
      firstName: firstName,
      secondName: secondName,
    })
    console.log(this.state.input)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.validateInput())
    console.log(this.state.input)
  }

  validateInput = (e) => {
    if (/\S/.test(this.state.input)) {
      return true
    } else {
      return false
    }
  }

  searchJoke = () => {
    const url = `http://api.icndb.com/jokes/random?escape=javascript&firstName=${this.state.firstName}&lastName=${this.state.secondName}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          customJoke: data.value.joke,
        })
      })
      .catch((err) =>console.log(err));
  }
  
  render() {
    let paragraph = (/\S/.test(this.state.input)) ? <p>{this.state.customJoke}</p> : null

    return (
      <div className="CustName">
        <header className="CustName-header">
          <h1 className="Custname-title">Norris Bank</h1>
        </header>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <label>
            <input name="name" type="text" value={this.state.input} placeholder="Full Name" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Search" onClick={() => this.searchJoke()}/>
        </form>
        {paragraph}
        <button onClick={() => this.onHome()}>Home</button>
      </div>
    );
  }
}

export default CustomName;
