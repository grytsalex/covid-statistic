import React, { memo } from "react";
import { TableRowItem, TableText } from "./styledComponent";

export const RowItem = memo(({ text, sortData }) => {
  return (
    <TableRowItem>
      <TableText onClick={() => sortData(text?.replace(/ /g, ""))}>
        {text}
      </TableText>
    </TableRowItem>
  );
});
