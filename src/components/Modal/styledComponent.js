import styled from "styled-components";
import { prop } from "styled-tools";

export const ModalButton = styled.div`
  width: 171px;
  height: 49px;
  background-color: #2196f3;
  border-radius: 20px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  width: 600px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 20px;
  position: absolute;
  z-index: 10000;
`;

export const ModalStatisticBlock = styled.div`
  width: 100%;
`;

export const ModalRow = styled.div`
  width: 100%;
`;

export const ModalHeader = styled.div`
  width: 100%;
`;

export const ModalTitle = styled.h1`
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: ${prop("fontColor", "#000000")};
`;

// export const Background = styled.div`
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   position: fixed;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
