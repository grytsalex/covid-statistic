import React from "react";
import { create } from "react-test-renderer";
import { Logo } from "../Logo";

describe("Logo", () => {
  it("should match snapshot", () => {
    const component = create(<Logo />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
