import React from "react";
import { create } from "react-test-renderer";
import { render, screen } from "@testing-library/react";
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
