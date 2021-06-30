import React from "react";
import { AlertComponent } from "../AlertComponent";
import { shallow, mount } from "enzyme";

jest.mock("../styledComponent", () => ({
  AlertMessage: (props) => <div className="alert-message" {...props} />,
}));

describe("Alert", () => {
  const commonProps = {
    message: "message",
  };

  it("should match snapshot", () => {
    expect(shallow(<AlertComponent {...commonProps} />)).toMatchSnapshot();
  });
});
