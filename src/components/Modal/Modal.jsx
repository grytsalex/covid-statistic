import React, { memo } from "react";
import { When } from "react-if";

import {
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  ModalStatisticBlock,
  ModalRow,
  ModalButton,
} from "./styledComponent";

import { Portal } from "./Portal";

export const Modal = memo(
  ({ isOpen, title = "Modal Header", handleKeyDownClose, closeModal }) => {
    return (
      <When condition={isOpen}>
        <Portal>
          <ModalWrapper onKeyDown={(e) => handleKeyDownClose(e)}>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
            </ModalHeader>
            <ModalStatisticBlock>
              <ModalRow>CONTENT</ModalRow>
            </ModalStatisticBlock>
            <ModalButton onClick={() => closeModal()}>ok</ModalButton>
          </ModalWrapper>
        </Portal>
      </When>
    );
  }
);
