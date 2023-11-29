import React, { Component } from 'react';

export default class Counter2 extends Component {
  render() {
    const plus = () => {
      this.setState({
        number: this.state.number + 1
      });
    };

    this.state = {
      number: 0,
      num: 100
    };

    return (
      <div>
        <h1>Counter {this.state.number}</h1>
        <button onClick={plus}>ADD</button>
      </div>
    );
  }
}
