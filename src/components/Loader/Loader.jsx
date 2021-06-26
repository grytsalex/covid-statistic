import React from "react";
import { SpinnerWrapper } from "./styledComponents";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";

export const Loader = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
};
