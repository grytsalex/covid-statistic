import styled from 'styled-components';

export const SearchFieldWrapper = styled.div`
  width: 600px;
  height: 80px;
  margin: 40px 60px 0 0;
  position: relative;

  //&:after {
  //  content: ""
  //}
`;

export const SearchInput = styled.input`
  //width: 100%;
  //height: 100%;
  height:80px;
  position: relative;
  border: none;
  display: block;
  font-size: 48px;
  line-height: 56px;
  font-weight: 400;
  outline: none;
  padding-left: 32px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  &::-webkit-input-placeholder {
    color: #B2B2B2;
    text-transform: capitalize;
  }
`;

export const SearchButton = styled.button`
  background-image: ${({ icon }) => `url(${icon})`};
  width: 30px;
  height: 30px;
  position: absolute;
  right: 5px;
  top: 0;
  border: none;
  background-color: white;
  transform: translateY(90%);
  outline: none;
  cursor: pointer;
  background-repeat: no-repeat;
`;