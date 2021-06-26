import React from "react";
import { LogoImage, LogoWrapper, LogoTitle } from "./styledComponent";
import img from "../../../assets/logo.jpg";

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImage src={img} />
      <LogoTitle>statistic</LogoTitle>
    </LogoWrapper>
  );
};
