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
  }) => {
    return (
      <TableRow
        tableHead={tableHead}
        withHover={withHover}
        onClick={() => openModal()}
      >
        {/*<If condition={tableHead}*/}
        {Object.values(tableData).map(({ text, isSorted }, index) => (
          <RowItem
            text={text}
            key={index}
            sortData={isSorted ? sortData : undefined}
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
};
