import React from "react";
import TestFlow from "./testFlow";
import { Flowpoint, Flowspace } from "flowpoints";

function TestScreen() {
  return (
    <div>
      <div>
        <Flowspace>
          <Flowpoint key="point_a" outputs={["point_b"]} >
            a
          </Flowpoint>
          <Flowpoint key="point_b" outputs={["point_d", "point_e"]}>
            b{" "}
          </Flowpoint>
          <Flowpoint
            key="point_c"
            outputs={{
              point_b: {
                output: "auto",
                input: "auto",
                inputColor: "red",
                dash: 5
              },
              point_a: {
                output: "right",
                input: "left"
              }
            }}
          >
            c
          </Flowpoint>
          <Flowpoint key="point_d">d</Flowpoint>
          <Flowpoint key="point_e">e</Flowpoint>
        </Flowspace>
      </div>
      <div>
        <TestFlow />
      </div>
    </div>
  );
}

export default TestScreen;
