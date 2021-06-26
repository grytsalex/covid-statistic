import React, { memo } from "react";
import { isEmpty } from "lodash";
import { When } from "react-if";
import { Scrollbars } from "react-custom-scrollbars";

import { Row } from "./Row";
import { tableHeaderText } from "../../consts";
import { TableWrapper } from "./styledComponent";

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: "rgba(35, 49, 86, 0.8)",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = (props) => (
  <Scrollbars renderThumbVertical={renderThumb} {...props} />
);

export const Table = memo(({ countries }) => {
  return (
    <TableWrapper>
      <Row
        serialNumber={tableHeaderText.serialNumberTitle}
        countryName={tableHeaderText.countryTitle}
        totalConfirmed={tableHeaderText.totalConfirmedTitle}
        tableHead
      />
      <When condition={!isEmpty(countries)}>
        <CustomScrollbars
          autoHide
          autoHideTimeout={500}
          autoHideDuration={200}
          style={{ width: "inherit", height: `calc(100vh - 340px)` }}
        >
          {countries?.map(({ Country, TotalConfirmed, ID }, index) => (
            <Row
              serialNumber={index + 1}
              countryName={Country}
              totalConfirmed={TotalConfirmed}
              key={ID}
            />
          ))}
        </CustomScrollbars>
      </When>
    </TableWrapper>
  );
});
