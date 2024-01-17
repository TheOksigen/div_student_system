import React, { useContext } from "react";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { AdminProvider } from "../Context/AdminContext";
import { useGetSexesQuery } from "../../store/apis/sexes/sexes";
const Admin = () => {
  const esmer = useGetSexesQuery();
  const { obj, adminObj } = useContext(AdminProvider);
  const { choose, slices } = adminObj;
  const { selectedHooks, objPost } = obj;

  const handleitemclick = (item) => {
    choose(item);
  };

  const items = Object.keys(slices)?.map((item, i) => ({
    key: i,
    label: (
      <Link to="admin" onClick={() => handleitemclick(item)} rel="noopener noreferrer">
        {item}
      </Link>
    ),
  }));

  return (
    <div>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      {/* {selectedItem && <AdminItems {...{ selectedItem, SelectedQueryHook, postQueryHook, deleteHook, objPost }} />} */}
    </div>
  );
};

export default Admin;
