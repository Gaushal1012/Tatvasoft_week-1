import { Component } from "react";
import Title from "../component/Title";


class Home extends Component {
  constructor() {
    super();
    this.State = {
      title: "Greetings from Tatvasoft",
      Description: "please complete your task",
    };
  }
  render() {
    return (
      <div>

        <h1>this is home page</h1>
        <h1>{this.State.title}</h1>

        <Title />
        <Title name="Gaushal" />
        <Title name="Sahil" />
      </div>
    );
  }
}

export default Home;