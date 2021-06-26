import React from "react";
import { SearchField } from "./SearchField";
import { Logo } from "./Logo";
import { HeaderWrapper } from "./styledComponent";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <SearchField />
    </HeaderWrapper>
  );
};
