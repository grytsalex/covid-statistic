import styled from "styled-components";
import { prop } from "styled-tools";

export const Button = styled.div`
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
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 36px 20px;
`;

export const Row = styled.div`
  width: 100%;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: ${prop("fontColor", "#000000")};
`;

export const Image = styled.img``;

export const TotalText = styled.span`
  font-size: 24px;
  line-height: 28px;
  color: #666666;
`;

export const QuantityText = styled(TotalText)``;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
