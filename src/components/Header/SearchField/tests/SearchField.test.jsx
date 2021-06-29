import React from "react";
import { SearchField } from "../SearchField";

describe("SearchField", () => {
  const commonProps = {
    onChange: jest.fn(),
  };

  it("should match snapshot", () => {
    const component = create(<SearchField {...commonProps} />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
