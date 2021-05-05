import { connect } from "react-redux";
import { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { Form, Input, InputNumber, Button } from "antd";
import "./Employee.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 18,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

function MyForm(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { data, dispatch } = props;
  const { key } = useRouteMatch().params;
  const history = useHistory();

  const employee = data.find((u) => u.key === key);
  const isAdded = typeof employee == "undefined";
  const [editedFirstName, setEditedFirstName] = useState(
    isAdded ? "" : employee.firstName
  );
  const [editedLastName, setEditedLastName] = useState(
    isAdded ? "" : employee.lastName
  );
  const [editedAge, setEditedAge] = useState(isAdded ? 0 : employee.age);
  const [editedAddress, setEditedAddress] = useState(
    isAdded ? "" : employee.address
  );
  isAdded ? console.log(data) : console.log(employee);
  console.log(isAdded);

  return (
    <Form
      {...layout}
      name="employee-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["employee", "FirstName"]}
        label="FirstName"
        initialValue={editedFirstName}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          // value={editedFirstName}
          // defaultValue={editedFirstName}
          onChange={(e) => setEditedFirstName(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name={["employee", "LastName"]}
        label="LastName"
        initialValue={editedLastName}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          // value={editedLastName}
          // defaultValue={editedLastName}
          onChange={(e) => setEditedLastName(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name={["employee", "age"]}
        label="Age"
        initialValue={editedAge}
        rules={[
          {
            type: "number",
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber
          // value={editedAge}
          // defaultValue={editedAge}
          onChange={(e) => {setEditedAge(e)}}
        />
      </Form.Item>

      <Form.Item
        name={["employee", "Address"]}
        label="Address"
        initialValue={editedAddress}
      >
        <Input.TextArea
          // value={editedAddress}
          // defaultValue={editedAddress}
          onChange={(e) => setEditedAddress(e.target.value)}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            if (isAdded) {
              dispatch({
                type: "create",
                payload: {
                  firstName: editedFirstName,
                  lastName: editedLastName,
                  age: editedAge,
                  address: editedAddress,
                  tags: [],
                },
              });
              history.push("/list")
            } else {
              dispatch({
                type: "update",
                payload: {
                  ...employee,
                  firstName: editedFirstName,
                  lastName: editedLastName,
                  age: editedAge,
                  address: editedAddress,
                },
              });
              history.goBack();
            }
          }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

function Employee(props) {
  const { data } = props;
  //console.log(data);
  return MyForm(props);
}

export default connect((state) => {
  return { data: state.data };
})(Employee);
