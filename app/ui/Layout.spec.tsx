import React from "react";
import { shallow } from "enzyme";
import Layout from "./Layout";

const testChild = 'TestChild'
let wrapped = shallow(<Layout>{testChild}</Layout>);

describe("Layout", () => {
it("renders the Layouts children", () => {
    expect(wrapped.find("div").text()).toEqual(testChild);
  });
});