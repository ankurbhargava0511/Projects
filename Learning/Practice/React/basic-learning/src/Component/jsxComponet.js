import React from "react";

export function AboutJsx() {
  return <h1>AboutJSX</h1>;
}

export function AboutJs() {
  return React.createElement("h1", null, "AboutJs");
}

export function ComplexJsx() {
  return <h1 color="red">Jsx Red Heading</h1>;
}

export function ComplexJs() {
  return React.createElement(
    "h1",
    { color: "red" },
    "Complex Jsx create element"
  );
}
/*
class-->className
for-->htmlFor
camelcased attributes
*/
export function ReactSyle() {
  return (
    <h1
      style={{
        // two curly brackets - i an writing Js as JSX
        color: "white",
        backgroundColor: "#000000", // properties are camel case
        height: 20 // this is pixel, we can use other unit with name as string
      }}
    >
      React Style
    </h1>
  );
}
