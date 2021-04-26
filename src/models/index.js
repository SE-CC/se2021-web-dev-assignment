import {createStore} from "redux";

const initialStore ={
    data:[
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
}

export default createStore((store = initialStore, action)=>{
    const {data} = store;

    const {type, payload} = action;

    switch(type){
        case "delete":
            const index = payload;
            data.splice(index,1);
            return {
                data: data.slice(0)
            };
        
        default:
            return store;
    }
})