import React, { memo, useEffect, useRef } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { When } from "react-if";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";

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
import { matchRowData, useOnClickOutside } from "../../utils";
import { selectorGetCurrentCountryData } from "../../selectors";

export const Modal = memo(({ isOpen, closeModal }) => {
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(100%)` : `translateY(0%)`,
  });

  const modalRef = useRef(null);

  const { countryName, countryData } = useSelector(
    selectorGetCurrentCountryData,
    shallowEqual
  );

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
                <Title>{countryName}</Title>
              </ModalHeader>
              <Content>
                {Object.keys(countryData).map((item) => (
                  <Row key={item}>
                    <Image src={matchRowData(item).icon} />
                    <TotalText>{matchRowData(item).text}</TotalText>
                    <QuantityText>{countryData[item]}</QuantityText>
                  </Row>
                ))}
              </Content>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button onClick={() => closeModal()}>ok</Button>
              </div>
            </ModalWrapper>
          </animated.div>
        </Overlay>
      </Portal>
    </When>
  );
});

Modal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};
