import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increase() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrease() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div>
        <p>Sayı:{this.state.count}</p>
        <button className="btn btn-outline-primary m-4" onClick={() => this.increase()}>arttır</button>
        <button onClick={() => this.decrease()}>azalt</button>
      </div>
    );
  }
}
export default Counter;
