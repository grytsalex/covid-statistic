import React, { memo, useCallback, useState, useEffect } from "react";
import { isEmpty } from "lodash";
import { When } from "react-if";
import { Scrollbars } from "react-custom-scrollbars";
import PropTypes from "prop-types";

import { Row } from "./Row";
import { tableHeaderCells } from "../../consts";
import { TableWrapper } from "./styledComponent";
import { columnSort } from "../../utils";

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

export const Table = memo(({ countries, openModal }) => {
  const [sortDirection, setSortDirection] = useState(false);
  const [sortedCountries, setSortCountries] = useState(countries);

  const handleSortData = useCallback(
    (key) => {
      const sortedData = countries.sort((a, b) =>
        columnSort(a[key], b[key], sortDirection)
      );
      setSortCountries(sortedData);
      setSortDirection(!sortDirection);
    },
    [countries, sortDirection]
  );

  useEffect(() => {
    setSortCountries(countries);
  }, [countries]);

  return (
    <TableWrapper className={"table-wrapper"}>
      <Row
        tableData={tableHeaderCells}
        sortData={handleSortData}
        tableHead
        withHover={false}
        borderLeft="1px solid white"
      />
      <When condition={!isEmpty(countries)}>
        <CustomScrollbars
          autoHide
          autoHideTimeout={500}
          autoHideDuration={200}
          style={{ width: "inherit", height: `calc(100vh - 340px)` }}
        >
          {sortedCountries?.map(({ Country, TotalConfirmed, ID }, index) => (
            <Row
              tableData={{
                serialNumber: {
                  text: `${index + 1}`,
                },
                country: {
                  text: Country,
                },
                totalConfirmed: {
                  text: TotalConfirmed,
                },
              }}
              key={ID}
              openModal={() => openModal(Country)}
            />
          ))}
        </CustomScrollbars>
      </When>
    </TableWrapper>
  );
});

Table.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object),
  openModal: PropTypes.func.isRequired,
};
