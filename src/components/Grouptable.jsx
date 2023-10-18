import React, { useState } from 'react';
import { Table, Checkbox, Avatar, InputNumber, Space, Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const Grouptable = () => {
  const [enabled, setEnabled] = useState([false, false, false]);

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
          <Avatar src={record.avatar} /> {record.name} ({record.username})
        </span>
      ),
    },
    {
      title: 'İştirak',
      dataIndex: 'radioGroup',
      key: 'radioGroup',
      render: (_, record, rowIndex) => (
        <Space direction="vertical">
          <Switch className='bg-red-700'
            checked={enabled[rowIndex]}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => {
              const updatedEnabled = [...enabled];
              updatedEnabled[rowIndex] = !enabled[rowIndex];
              setEnabled(updatedEnabled);
            }}
          />
        </Space>
        
      ),
      width: '5%',
    },
    {
      title: 'Online',
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: (_, record, rowIndex) => (
        <Checkbox  disabled={!enabled[rowIndex]} />
      ),
      width: '3%',
    },
    {
      title: 'Gecikme',
      dataIndex: 'checkbox',
      key: 'gecikmeCheckbox',
      render: (_, record, rowIndex) => (
        <Checkbox disabled={!enabled[rowIndex]} />
      ),
      width: '3%',
    },
    {
      title: 'Ev taskı',
      dataIndex: 'evTask',
      key: 'evTask',
      width: '15%',
      render: (_, record) => (
        <InputNumber min={1} max={10} defaultValue={1} className="w-50" />
      ),
    },
    {
      title: 'Mentor taskı',
      dataIndex: 'mentorTask',
      key: 'mentorTask',
      width: '15%',
      render: (_, record) => (
        <InputNumber min={1} max={10} defaultValue={1} className="w-50" />
      )

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

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div className="w-full overflow-x-auto sm:overflow-x-hidden">
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default Grouptable;
