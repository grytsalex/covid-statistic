import React, { useRef, memo } from "react";
import PropTypes from "prop-types";

import {
  SearchButton,
  SearchFieldWrapper,
  SearchInput,
} from "./styledComponent";
import img from "../../../assets/search.svg";

export const SearchField = memo(({ onChange }) => {
  const inputRef = useRef(null);
  const onInputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <SearchFieldWrapper className={"input-wrapper"}>
      <SearchInput
        name="search"
        placeholder="search..."
        type="text"
        ref={inputRef}
        onChange={onChange}
        className={"input"}
      />
      <SearchButton icon={img} onClick={onInputFocus} />
    </SearchFieldWrapper>
  );
});

SearchField.propTypes = {
  onChange: PropTypes.func,
};
