import React from "react";
import { LogoImage, LogoWrapper, LogoTitle } from "./styledComponent";
import img from "../../../assets/logo.jpg";

export const Logo = () => {
  return (
    <LogoWrapper className={"logo-wrapper"}>
      <LogoImage src={img} />
      <LogoTitle className={"logo-title"}>statistic</LogoTitle>
    </LogoWrapper>
  );
};
