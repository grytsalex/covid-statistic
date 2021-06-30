import React from "react";
import { AlertMessage, AlertWrapper } from "./styledComponent";
import PropTypes from "prop-types";

export const AlertComponent = ({ message }) => {
  return (
    <AlertWrapper>
      <AlertMessage>{message}</AlertMessage>
    </AlertWrapper>
  );
};

AlertComponent.propTypes = {
  message: PropTypes.string,
};
