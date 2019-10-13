import React from "react";
//import { thisExpression } from '@babel/types';
// state is mutable
class ConstructorState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "This Is State via Contructure Method" };
  }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    );
  }
  //   componentDidMount() {
  //     this.setState({ message: "This Is State via Contructure Method" });
  //   }
}
class PropertyState extends React.Component {
  state = { message: "property State" };
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    );
  }
  //   componentDidMount() {
  //     this.setState({ message: "This Is State via property Method" });
  //   }
}

export { ConstructorState, PropertyState }; //,PropertyState}
