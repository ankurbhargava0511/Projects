import React from "react";

// create class
// var TypeCreateClass = React.creatClass({
//   render: function() {
//     return <h1>Types of react component- this is create class</h1>;
//   }
// });

//class component
class TypeClassComponent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return <h1>this is Class component</h1>;
  }
}

//functional Component
function MyfunctionalComponent(props) {
  return <h1>this is functional Component</h1>;
}
const ArrowFn = props => <h1>this is Arrow function component</h1>;

export { TypeClassComponent, MyfunctionalComponent, ArrowFn };
