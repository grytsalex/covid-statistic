import React, { memo } from "react";
import { TableRowItem, TableText } from "./styledComponents";

export const RowItem = memo(({ text }) => {
  return (
    <TableRowItem>
      <TableText>{text}</TableText>
    </TableRowItem>
  );
});
