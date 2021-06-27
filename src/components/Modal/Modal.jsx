import React, { memo, useEffect, useRef } from "react";
import { When } from "react-if";
import { useSpring, animated } from "react-spring";

import {
  ModalWrapper,
  ModalHeader,
  Title,
  Row,
  Button,
  Image,
  TotalText,
  QuantityText,
  Content,
  Overlay,
} from "./styledComponent";
import { Portal } from "./Portal";
import { matchIcons, useOnClickOutside } from "../../utils";

export const Modal = memo(
  ({ isOpen, title = "Modal Header", handleKeyDownClose, closeModal }) => {
    const animation = useSpring({
      config: {
        duration: 250,
      },
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? `translateY(100%)` : `translateY(0%)`,
    });

    const modalRef = useRef(null);

    useEffect(() => {
      function keyListener(e) {
        if (e.keyCode === 27 || e.keyCode === 13) {
          closeModal();
        }
      }

      document.addEventListener("keydown", keyListener);

      return () => document.removeEventListener("keydown", keyListener);
    }, [closeModal]);

    useOnClickOutside(modalRef, closeModal);

    return (
      <When condition={isOpen}>
        <Portal>
          <Overlay>
            <animated.div style={animation}>
              <ModalWrapper ref={modalRef}>
                <ModalHeader>
                  <Title>{title}</Title>
                </ModalHeader>
                <Content>
                  <Row>
                    <Image src={matchIcons()}></Image>
                    <TotalText>Total Confirmed</TotalText>
                    <QuantityText>47934</QuantityText>
                  </Row>
                  <Row>
                    <Image src={matchIcons()}></Image>
                    <TotalText>Total Confirmed</TotalText>
                    <QuantityText>47934</QuantityText>
                  </Row>
                  <Row>
                    <Image src={matchIcons()}></Image>
                    <TotalText>Total Confirmed</TotalText>
                    <QuantityText>47934</QuantityText>
                  </Row>
                </Content>
                <Button onClick={() => closeModal()}>ok</Button>
              </ModalWrapper>
            </animated.div>
          </Overlay>
        </Portal>
      </When>
    );
  }
);
