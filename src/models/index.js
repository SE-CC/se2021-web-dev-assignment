import { createStore } from "redux";

const initialStore = {
  data: [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ],
  keyNum: 4,
};

export default createStore((store = initialStore, action) => {
  const { data, keyNum } = store;

  const { type, payload } = action;

  switch (type) {
    case "create":
      console.log(keyNum);
      const createdEmployee = payload;
      createdEmployee.key = String(keyNum);
      return {
        data: data.concat([createdEmployee]),
        keyNum: keyNum + 1,
      };

    case "delete":
      //   const deletedIndex = payload;
      //   data.splice(deletedIndex, 1);
      //   return {
      //     data: data.slice(0),
      //   };
      const deletedEmployee = payload;
      return {
        data: data.filter((e) => e !== deletedEmployee),
      };

    case "update":
      const updatedEmployee = payload;
      return {
        data: data.map((e) =>
          e.key === updatedEmployee.key ? updatedEmployee : e
        ),
      };

    default:
      return store;
  }
});
