import React, { Component } from 'react';

class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
          secondsLeft: props.initialCount
        }
      }
    render() {
        let text = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`
      return (
       <div>
           <h1>{text}</h1>
       </div>
      );
    }
  }
  
  export default Bomb;