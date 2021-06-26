import styled, { css } from "styled-components";
import { ifProp, prop } from "styled-tools";

export const TableRow = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${ifProp(
    "tableHead",
    css`
      background-color: #2196f3;
      box-shadow: none;
      cursor: auto;
      color: #ffffff;
    `
  )}
`;

export const TableRowItem = styled.div`
  text-transform: capitalize;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  &:first-child {
    max-width: 78px;
  }

  &:not(:first-child) {
    border-left: ${prop("borderLeft", "1px solid #B2B2B2")};
    justify-content: left;
    padding-left: 21px;
  }

  &:last-child {
    max-width: 560px;
  }
`;

export const TableText = styled.span`
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  cursor: pointer;
`;
