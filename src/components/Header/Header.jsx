import React, { memo } from "react";
import { SearchField } from "./SearchField";
import { Logo } from "./Logo";
import { HeaderWrapper } from "./styledComponent";

export const Header = memo(({ onChange }) => {
  return (
    <HeaderWrapper>
      <Logo />
      <SearchField onChange={onChange} />
    </HeaderWrapper>
  );
});
