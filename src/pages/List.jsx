import {useState} from "react";
import { Table, Tag, Space } from 'antd';
import "./List.css";
export default function List(){
    const { Column, ColumnGroup } = Table;
    const [data, setData] = useState([
        {
          key: '1',
          firstName: 'John',
          lastName: 'Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          firstName: 'Jim',
          lastName: 'Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          firstName: 'Joe',
          lastName: 'Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ]
    );

    return (
        <div className = "list page container">
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
                    render={tags => (
                        <>
                            {tags.map(tag => (
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
                            <a className = "edit">Edit {record.lastName}</a>
                            <a className = "delete" onClick={(e)=>{
                                let line = e.target.parentNode.parentNode.parentNode.parentNode;
                                let index = 0;
                                while((line=line.previousSibling)!=null)
                                    index++;
                                data.splice(index,1);
                                let d= data.slice(0);
                                setData(d);
                            }}>Delete</a>
                        </Space>
                    )}
                />
            </Table>
        </div>
    )
}
