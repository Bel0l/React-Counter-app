import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super();
        this.State = {
            number:0,
            num:100
        }


    }
  render() {
    const plus =() =>{
         this.setState({
            number : this.setState.number +1
         })
    }
    return (
      <div><h1>counter {this.state.number} </h1>
      <button onClick={plus}>ADD</button>
      
      </div>
    )
  }
}
