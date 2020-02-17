import React, { Component } from 'react';

class Joke extends Component {
constructor(props) {
  super(props);
  this.state = {
    joke: [],
    };
  }


componentDidMount() {
  const url = 'http://api.icndb.com/jokes/random?escape=javascript';

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        joke: data.value.joke,
      })
    })
    .catch((err) => {
      console.log(err)
    });
  }


  render() {
    return (
      <div>
        <p>{this.state.joke}</p>
      </div>
    );
  }
}

export default Joke;
