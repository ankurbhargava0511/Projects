import React from "react";
import FunctionalComponent from "./Component/FunctionalComponent";

import SimpleComponent from "./Component/SimpleComponent";
import ClassComponent from "./Component/ClassComponent";
import PropComponent from "./Component/PropComponent";
import ClassComponentWithProps from "./Component/ClassComponentWithProps";
import { ConstructorState, PropertyState } from "./Component/StateComponent";
import LifeCycleComponent from "./Component/ComponentLifeCycle";
import NestedComponent from "./Component/NestedComponent";
import ContextComponent from "./Component/ContextControl";
import {
  AboutJsx,
  AboutJs,
  ComplexJsx,
  ComplexJs,
  ReactSyle
} from "./Component/jsxComponet";

import {
  TypeClassComponent,
  MyfunctionalComponent,
  ArrowFn
} from "./Component/ReactComponentType";

function App() {
  return (
    // option 1 createElement
    //React.createElement("h1",null ,"test")
    //option 2 create element with attribute element

    //React.createElement("h1",{id:"tt"} ,"test1")
    //option 3 create element with nested element
    //React.createElement("div",{id:"tt"} ,React.createElement("p", null,"Parar"))
    // option 3 JSX
    /* <div>
      <p>
        "my value"
      </p>
    </div> */

    //below we have Fragment
    <React.Fragment>
      <AboutJsx />
      <AboutJs />
      <ComplexJsx />
      <ComplexJs />
      <ReactSyle />

      <TypeClassComponent />
      <MyfunctionalComponent />
      <ArrowFn />

      <SimpleComponent />
      <FunctionalComponent />
      <ClassComponent />
      <PropComponent message="This component except prop" />
      <ClassComponentWithProps message="This is Class Component with prop" />
      <ConstructorState />
      <PropertyState />

      <LifeCycleComponent />
      <NestedComponent />
      <ContextComponent />
    </React.Fragment>
  );
}

export default App;
