import React, { memo } from "react";
import { TableRow } from "./styledComponents";
import { RowItem } from "./RowItem";

export const Row = memo(({ tableHead = false, ...rest }) => {
  return (
    <TableRow tableHead={tableHead}>
      {Object.values(rest).map((item) => (
        <RowItem text={item} key={item} />
      ))}
    </TableRow>
  );
});
