import React from "react";
import { shallow, mount } from "enzyme";
import { Logo } from "../Logo";
import { LogoWrapper, LogoImage } from "../styledComponent";

describe("Logo", () => {
  it("should match snapshot", () => {
    expect(shallow(<Logo />)).toMatchSnapshot();
  });

  it("should contain jpg icon", () => {
    const wrapper = mount(
      <LogoWrapper>
        <LogoImage />
      </LogoWrapper>
    );

    expect(wrapper.find("svg")).toBeDefined();
  });
});
