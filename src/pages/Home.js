import { Component } from "react";
import Title from "../component/Title";

class Home extends Component {
  // task 3:
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

        {/* task: 3 */}
        <h1>this is home page</h1>
        <h1>{this.State.title}</h1>

        {/* Task: 2 */}
        {/* <Title />
        <Title name="Gaushal" />
        <Title name="Sahil" /> */}
      </div>
    );
  }
}

export default Home;