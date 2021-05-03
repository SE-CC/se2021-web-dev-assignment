// import { useState } from "react";
import { Table, Tag, Space } from "antd";
import $ from "jquery";
import "./List.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function List(props) {
  const { data, dispatch } = props;
  const { Column, ColumnGroup } = Table;
  const history = useHistory();

  return (
    <div className="list page container">
      <Table dataSource={data}>
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space direction="vertical">
              <a
                className="edit"
                onClick={() => history.push("/employee/" + record.key)}
              >
                Edit {record.lastName}
              </a>
              <a
                className="delete"
                onClick={() => {
                  // const index = $(
                  //   e.target.parentNode.parentNode.parentNode.parentNode
                  // ).index();
                  // alert(index);
                  dispatch({
                    type: "delete",
                    payload: record,
                  });
                }}
              >
                Delete
              </a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}

export default connect((state) => {
  return { data: state.data };
})(List);
