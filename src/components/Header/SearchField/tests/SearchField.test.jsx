import React from "react";
import { SearchField } from "../SearchField";
import { shallow } from "enzyme";

describe("SearchField", () => {
  const commonProps = {
    onChange: jest.fn(),
  };

  it("should match snapshot", () => {
    const component = shallow(<SearchField {...commonProps} />);

    expect(component).toMatchSnapshot();
  });
});
