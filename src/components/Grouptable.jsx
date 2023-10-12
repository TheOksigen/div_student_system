import React from 'react';
import { Table, Radio, Checkbox, Avatar, InputNumber } from 'antd';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: '3%',
  },

  {
    title: 'Ad Soyad',
    dataIndex: 'fullName',
    key: 'fullName',
    width: '20%',
    render: (_, record) => (
      <span>
        <Avatar src={record.avatar} />   {record.name} ({record.username})
      </span>
    ),
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
  {
    title: 'Ev taskı',
    dataIndex: 'inputRange',
    key: 'inputRange',
    width: '15%',
    render: (_, record) => (
      <InputNumber
        min={1}
        max={10}
        defaultValue={1}
        className='w-50'
      />
    ),
  },
  {
    title: 'Mentor taskı',
    dataIndex: 'inputRange',
    key: 'inputRange',
    width: '15%',
    render: (_, record) => (
      <InputNumber
        min={1}
        max={10}
        defaultValue={1}
        className='w-50'
      />
    ),
  },
];

const data = [
  {
    key: '1',
    id: 1,
    name: 'david mammedov',
    username: 'david@div.edu.az',
    radioGroup: 'A',
    checkbox: true,
    avatar: 'URL_TO_IMAGE_1', 
  },
  {
    key: '2',
    id: 2,
    name: 'david mammedov',
    username: 'david@div.edu.az',
    radioGroup: 'B',
    checkbox: false,
    avatar: 'URL_TO_IMAGE_2', 
  },
  {
    key: '3',
    id: 3,
    name: 'david mammedov',
    username: 'david@div.edu.az',
    radioGroup: 'C',
    checkbox: true,
    avatar: 'URL_TO_IMAGE_3', 
  },
];

const onChange = (pagination, extra) => {
  console.log('params', pagination, extra);
};

const Grouptable = () => (
  <div className="w-full overflow-x-auto sm:overflow-x-hidden">
    <Table columns={columns} dataSource={data} onChange={onChange} />
  </div>
);

export default Grouptable;
