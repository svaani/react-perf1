import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    longString1: "",
    longString2: "",
    longString3: "",
    longString4: ""
  }

  App() {
    this.super();
    this.longStringPre = "";
  }

  componentDidMount = function () {
    this.updateString();
    setTimeout(this.setState.bind(this, {
      longString1: this.longStringPre,
    }), 1000);
    setTimeout(this.setState.bind(this, { longString2: this.longStringPre }), 3000);
    setTimeout(this.setState.bind(this, { longString3: this.longStringPre }), 2000);
    setTimeout(this.setState.bind(this, { longString4: this.longStringPre }), 1500);
  }

  updateString = () => {
    let outerIncrement = 0;
    let increment = 0;

    do {
      do {
        this.longStringPre += "String number:" + increment++;
        ;
      } while (increment < 100);
      outerIncrement++;
    } while (outerIncrement < 100);
  }
  render() {

    return (
      <div className="App2">
        <div>hello</div>
        <div><div>{this.state.longString1}</div></div>
        <div><div><div>{this.state.longString2}</div>{this.state.longString3}</div></div>
        <div><span>{this.state.longString4}</span><span>{this.state.longString2.split(":").join("--")}</span></div>
        <div><div><div></div>{this.state.longString2.split(":").join("-")}</div></div>
        <div><div>{this.state.longString2.split(":").join("||")}<div></div>{this.state.longString1}</div></div>
        <p><span>{this.state.longString1.split(":").join("=")}</span></p>
      </div>
    );
  };


}

export default App;
