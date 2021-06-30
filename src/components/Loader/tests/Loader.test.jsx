import React from "react";
import { Loader } from "../Loader";
import { shallow } from "enzyme";

describe("Loader", () => {
  it("should match snapshot", () => {
    expect(shallow(<Loader />)).toMatchSnapshot();
  });
});
