import React from "react";
import { SpinnerWrapper } from "./styledComponent";
import Spinner from "../../assets/spinner.svg";

export const Loader = () => {
  return (
    <SpinnerWrapper>
      <img src={Spinner} alt="no image"/>
    </SpinnerWrapper>
  );
};
