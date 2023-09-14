import React from 'react';
import { Badge, Calendar } from 'antd';


const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning',
          content: 'Tutaqki burda front dersi var',
        },
        {
          type: 'success',
          content: 'Burdada nese',
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: 'warning',
          content: 'Neseler...',
        },
        {
          type: 'success',
          content: 'Neseler...',
        },
        {
          type: 'error',
          content: 'Neseler...',
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: 'warning',
          content: 'Neseler...',
        },
        {
          type: 'success',
          content: 'Neseler...',
        },
        {
          type: 'error',
          content: 'Neseler...',
        },
        {
          type: 'error',
          content: 'Neseler...',
        },
        {
          type: 'error',
          content: 'Neseler...',
        },
        {
          type: 'error',
          content: 'Neseler...',
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const Calendarr = () => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };
  return <Calendar cellRender={cellRender} />;
};
export default Calendarr;