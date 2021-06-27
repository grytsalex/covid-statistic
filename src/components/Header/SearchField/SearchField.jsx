import React, { useRef, memo } from "react";
import {
  SearchButton,
  SearchFieldWrapper,
  SearchInput,
} from "./styledComponent";
import img from "../../../assets/search.svg";
import PropTypes from "prop-types";
import { Header } from "../Header";

export const SearchField = memo(({ onChange }) => {
  const inputRef = useRef(null);
  const onInputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <SearchFieldWrapper>
      <SearchInput
        name="search"
        placeholder="search..."
        type="text"
        ref={inputRef}
        onChange={onChange}
      />
      <SearchButton icon={img} onClick={onInputFocus} />
    </SearchFieldWrapper>
  );
});

SearchField.propTypes = {
  onChange: PropTypes.func,
};
