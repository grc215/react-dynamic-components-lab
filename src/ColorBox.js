import React, { Component } from 'react';
let op = 1;

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
  while (op > .1) {
    if (op > .2) { 
      return (
      <div className="color-box" style={{opacity: op /*replace null with the value*/}}>
      {op = op - .1}
      </div>
      )}
     else {
       return (null)
       op = op - .1
     }
     }
}
}