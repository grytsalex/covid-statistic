import React from 'react';
import {SearchButton, SearchFieldWrapper, SearchInput} from "./styledComponents";
import img from '../../../assets/search.svg';

export const SearchField = () => {

    const [searchTerm, setSearchTerm] = React.useState("");
    const handleChange = event => {
        setSearchTerm(event.target.value);
        console.log(event.target.value)
    };

    return (
        <SearchFieldWrapper>
                <SearchInput name="search" placeholder="search..." type="text" onChange={handleChange} value={searchTerm}/>
                <SearchButton icon={img}/>
        </SearchFieldWrapper>
    )
}