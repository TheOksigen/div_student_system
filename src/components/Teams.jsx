import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Name',
    responsive: ["xs"],
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    responsive: ["xs"],
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    responsive: ["xs"],
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    responsive: ["xs"],
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  //{
  //  title: 'Action',
  //  key: 'action',
  //  render: (_, record) => (
  //    <Space size="middle">
  //      <a>Invite {record.name}</a>
  //      <a>Delete</a>
  //    </Space>
  //  ),
  //},
];
const data = [
  {
    key: '1',
    name: 'David Memmdov',
    age: 19,
    address: '',
    tags: ['nice', 'Mentor'],
  },
  {
    key: '2',
    name: 'Vahid Qasim',
    age: 42,
    address: 'Nabran',
    tags: ['nice', "Teacher"],
  },
  {
    key: '3',
    name: 'Mirefqan',
    age: 24,
    address: 'Razin',
    tags: ['cool', 'mentor'],
  },
];
const Team = () => <Table columns={columns} dataSource={data}  />;
export default Team;