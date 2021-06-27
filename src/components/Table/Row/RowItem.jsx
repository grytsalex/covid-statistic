import React, { memo } from "react";
import { TableRowItem, TableText } from "./styledComponent";
import { PropTypes } from "prop-types";

export const RowItem = memo(({ text, sortData = () => {} }) => {
  return (
    <TableRowItem>
      <TableText onClick={() => sortData(text.toString().replace(/ /g, ""))}>
        {text}
      </TableText>
    </TableRowItem>
  );
});

RowItem.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sortData: PropTypes.func,
};
