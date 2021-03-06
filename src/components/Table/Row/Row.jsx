import React, { memo } from "react";
import PropTypes from "prop-types";

import { TableRow } from "./styledComponent";
import { RowItem } from "./RowItem";

export const Row = memo(
  ({
    tableHead = false,
    openModal = () => {},
    sortData = () => {},
    tableData = {},
    withHover = true,
    borderLeft,
  }) => {
    return (
      <TableRow
        tableHead={tableHead}
        withHover={withHover}
        onClick={() => openModal()}
      >
        {Object.values(tableData).map(({ text, isSorted }, index) => (
          <RowItem
            text={text}
            key={index}
            sortData={isSorted ? sortData : undefined}
            borderLeft={borderLeft}
          />
        ))}
      </TableRow>
    );
  }
);

Row.propTypes = {
  tableData: PropTypes.object.isRequired,
  tableHeader: PropTypes.bool,
  openModal: PropTypes.func,
  sortData: PropTypes.func,
  withHover: PropTypes.bool,
  borderLeft: PropTypes.string,
};
