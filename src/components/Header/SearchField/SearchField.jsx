import React, { useRef } from "react";
import {
  SearchButton,
  SearchFieldWrapper,
  SearchInput,
} from "./styledComponents";
import img from "../../../assets/search.svg";

export const SearchField = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

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
        onChange={handleChange}
        value={searchTerm}
      />
      <SearchButton icon={img} onClick={onInputFocus} />
    </SearchFieldWrapper>
  );
};
