import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "../../utils/utils.js";
import matchSorter from 'match-sorter'

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import './TableGrid.scss';
class TableGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div className="TableGrid">
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "As of Date",
              accessor: "as_of_date",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "Label Name",
              accessor: "labelName",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "DQ Rule ID",
              accessor: "dq_rule_id",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "Category",
              accessor: "category",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "Progress",
              accessor: "progress",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "DQ Entity",
              accessor: "dq_entity",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "DQ Attr",
              accessor: "dq_attr",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "DQ Attr Value",
              accessor: "dq_attr_value",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "DQ Excp Msg",
              accessor: "dq_excp_msg",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            },
            {
              Header: "Primary Key",
              accessor: "primarykey",
              filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value)
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
      </div>
    );
  }
}

export default TableGrid;