import React from 'react';
import FunctionalComponent from "./Component/FunctionalComponent"

import SimpleComponent from './Component/SimpleComponent';
import ClassComponent from './Component/ClassComponent';
import PropComponent from './Component/PropComponent';
import ClassComponentWithProps from './Component/ClassComponentWithProps'
//import {ConstructState,PropertyState}  from "./Component/StateComponent"
import NestedComponent from "./Component/NestedComponent"
import ContextComponent from "./Component/ContextControl"
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
  <SimpleComponent/>
  <FunctionalComponent/>
  <ClassComponent/>
  <PropComponent message="This component except prop"/>
  <ClassComponentWithProps message="This is Class Component with prop"/>
  <NestedComponent/>
  <ContextComponent/>


</React.Fragment>
    
     
    

  );
}

export default App;
