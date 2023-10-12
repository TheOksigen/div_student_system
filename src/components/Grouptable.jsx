import React from 'react';
import { Table, Radio, Checkbox } from 'antd';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: '10%',
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'Ad Soyad', 
    dataIndex: 'fullName',
    key: 'fullName',
    width: '20%',
    render: (_, record) => `${record.name} (${record.username})`,
    sorter: (a, b) => `${a.name} (${a.username})`.localeCompare(`${b.name} (${b.username})`), 
  },
  {
    title: 'İştirak',
    dataIndex: 'radioGroup',
    key: 'radioGroup',
    render: (_, record) => (
      <Radio.Group defaultValue={record.radioGroup}>
        <Radio value="A">q/b</Radio>
        <Radio value="B">i/e</Radio>
        <Radio value="C">g/e</Radio>
      </Radio.Group>
    ),
    width: '20%',
  },
  {
    title: 'Online',
    dataIndex: 'checkbox',
    key: 'checkbox',
    render: (_, record) => <Checkbox defaultChecked={record.checkbox} />,
    width: '10%',
  },
];

const data = [
  {
    key: '1',
    id: 1,
    name: 'John',
    username: 'john.brown',
    radioGroup: 'A',
    checkbox: true,
  },
  {
    key: '2',
    id: 2,
    name: 'Jim',
    username: 'jim.green',
    radioGroup: 'B',
    checkbox: false,
  },
  {
    key: '3',
    id: 3,
    name: 'Joe',
    username: 'joe.black',
    radioGroup: 'C',
    checkbox: true,
  },
];

const onChange = (pagination, sorter, extra) => {
  console.log('params', pagination, sorter, extra);
};

const Grouptable = () => (
  <div className="w-full overflow-x-auto sm:overflow-x-hidden">
    <Table columns={columns} dataSource={data} onChange={onChange} />
  </div>
);

export default Grouptable;