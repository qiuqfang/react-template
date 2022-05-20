import { Table } from "antd";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./index.less";

export default withRouter(
  class TableList extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      const { dataSource, columns, paginationParams, handlePaginationChange } = this.props;
      return (
        <Table
          dataSource={dataSource}
          columns={columns.call(this)}
          pagination={{
            defaultCurrent: paginationParams.defaultCurrent,
            pageSize: paginationParams.pageSize,
            total: paginationParams.total,
            showSizeChanger: true,
            showTotal: (total) => `共 ${total} 条 | ${paginationParams.pageSize} 条/页`,
            onChange: handlePaginationChange,
          }}
          sticky
          scroll={{
            scrollToFirstRowOnChange: true,
            y: dataSource.length <= 0 ? null : "calc(100vh - 424px)",
          }}
        ></Table>
      );
    }
  }
);
