import React, { memo } from "react";
import { TableRow } from "./styledComponent";
import { RowItem } from "./RowItem";

export const Row = memo(
  ({ tableHead = false, sortData = () => {}, openModal, ...rest }) => {
    return (
      <TableRow
        tableHead={tableHead}
        onClick={!tableHead && (() => openModal())}
      >
        {Object.values(rest).map((item, index) => (
          <RowItem text={item} key={index} sortData={sortData} />
        ))}
      </TableRow>
    );
  }
);
