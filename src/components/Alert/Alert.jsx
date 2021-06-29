import React from "react";
import { AlertMessage, AlertWrapper } from "./styledComponent";
import PropTypes from "prop-types";

export const Alert = ({ message }) => {
  return (
    <AlertWrapper>
      <AlertMessage>{message}</AlertMessage>
    </AlertWrapper>
  );
};

Alert.propTypes = {
  message: PropTypes.string,
};
