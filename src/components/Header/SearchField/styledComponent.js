import styled from "styled-components";

export const SearchFieldWrapper = styled.div`
  height: 80px;
  margin: 40px 60px 0 0;
  position: relative;
`;

export const SearchInput = styled.input`
  min-width: 600px;
  height: 80px;
  position: relative;
  border: none;
  display: block;
  font-size: 48px;
  line-height: 56px;
  font-weight: 400;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding-left: 32px;

  &::-webkit-input-placeholder {
    color: #b2b2b2;
    text-transform: capitalize;
  }
`;

export const SearchButton = styled.button`
  background-image: ${({ icon }) => `url(${icon})`};
  width: 30px;
  height: 30px;
  position: absolute;
  right: 22px;
  top: 0;
  border: none;
  background-color: white;
  transform: translateY(90%);
  outline: none;
  cursor: pointer;
  background-repeat: no-repeat;
`;
