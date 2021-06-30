import React from "react";
import { Row } from "../Row";
import { shallow } from "enzyme";

describe("Row", () => {
  const commonProps = {
    tableHead: false,
    openModal: jest.fn(),
    sortData: jest.fn(),
    tableData: {},
    withHover: false,
    borderLeft: "",
  };

  it("should match snapshot", () => {
    expect(shallow(<Row {...commonProps} />)).toMatchSnapshot();
  });
});
