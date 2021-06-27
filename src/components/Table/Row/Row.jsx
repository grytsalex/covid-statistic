import React, { memo } from "react";
import { TableRow } from "./styledComponent";
import { RowItem } from "./RowItem";

export const Row = memo(
  ({
    tableHead = false,
    openModal = () => {},
    sortData = () => {},
    tableData = {},
  }) => {
    return (
      <TableRow tableHead={tableHead} onClick={() => openModal()}>
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
