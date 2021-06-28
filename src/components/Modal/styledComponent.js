import styled from "styled-components";
import { prop } from "styled-tools";

export const Button = styled.div`
  width: 171px;
  height: 49px;
  background-color: ${prop("buttonBgColor", "#2196f3")};
  border-radius: 20px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${prop("buttonFontColor", "#FFFFFF")};
  font-size: ${prop("buttonFontSize", "24px")};
  font-weight: bold;
  line-height: 28px;
`;

export const ModalWrapper = styled.div`
  width: 600px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 20px;
  position: relative;
  z-index: 1000;
  left: 50%;
  transform: translateX(-50%);
`;

export const Content = styled.div`
  margin: 36px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "image totalText quantityText";

  &:not(:last-child) {
    margin-bottom: 48px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: ${prop("fontColor", "#000000")};
  padding-top: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Image = styled.img`
  grid-area: image;
`;

export const TotalText = styled.span`
  font-size: 24px;
  line-height: 28px;
  color: #666666;
  grid-area: totalText;
`;

export const QuantityText = styled(TotalText)`
  grid-area: quantityText;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
