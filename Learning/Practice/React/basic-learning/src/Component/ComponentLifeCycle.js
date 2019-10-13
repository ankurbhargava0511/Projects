import React from "react";
class LifeCycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.MyString = "Constructor";
  }

  render() {
    return (
      <div>
        <p>LifecycleState</p>
        <p>Constructor + {this.Con} </p>
        <p>render</p>
      </div>
    );
  }

  componentWillMount() {}
  componentDidMount() {}
  shouldComponentUpdate() {}

  componentWillReceiveProps() {}
  componentWillUpdate() {}
  componentDidUpdate() {}

  componentDidCatch() {}

  componentWillUnmount() {}
}

export default LifeCycleComponent;
