import React from "react";
import { shallow } from "enzyme";
import App from "./App";

let wrapped = shallow(<App />);

describe("App", () => {
it("renders the Layout component", () => {
    expect(wrapped.find("Layout"));
  });
it("renders the GridControls component", () => {
    expect(wrapped.find("GridControls"));
  });
it("renders the Grid component", () => {
    expect(wrapped.find("Gridy"));
  });
});