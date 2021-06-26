import React, { memo } from "react";
import { When } from "react-if";
import { useSpring, animated } from "react-spring";

import {
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  ModalStatisticBlock,
  ModalRow,
  ModalButton,
  ModalRowImage,
  TotalText,
  QuantityText,
} from "./styledComponent";
import { Portal } from "./Portal";
import { matchIcons } from "../../utils";

export const Modal = memo(
  ({ isOpen, title = "Modal Header", handleKeyDownClose, closeModal }) => {
    const animation = useSpring({
      config: {
        duration: 250,
      },
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? `translateY(0%)` : `translateY(-100%)`,
    });

    return (
      <When condition={isOpen}>
        <Portal>
          <animated.div style={animation}>
            <ModalWrapper onKeyDown={(e) => handleKeyDownClose(e)}>
              <ModalHeader>
                <ModalTitle>{title}</ModalTitle>
              </ModalHeader>
              <ModalStatisticBlock>
                <ModalRow>
                  <ModalRowImage src={matchIcons()}></ModalRowImage>
                  <TotalText>Total Confirmed</TotalText>
                  <QuantityText></QuantityText>
                </ModalRow>
              </ModalStatisticBlock>
              <ModalButton onClick={() => closeModal()}>ok</ModalButton>
            </ModalWrapper>
          </animated.div>
        </Portal>
      </When>
    );
  }
);
