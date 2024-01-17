import React, { useState } from "react";
import {
  Bars3Icon,
  CalendarIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MapIcon,
  MegaphoneIcon,
  UserGroupIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { MenuFoldOutlined, MenuUnfoldOutlined, DownOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme, Dropdown, Space, Typography } from "antd";
import { Link, NavLink, Outlet } from "react-router-dom";

import User from "../../elements/User";
import { nanoid } from "nanoid";
import Admin from "../AdminChanges/Admin";
const { Header, Sider, Content } = Layout;

const navigation = [
  { name: "Dashboard", href: "home", icon: <HomeIcon className="h-5 w-5" /> },
  { name: "Calendar", href: "calendar", icon: <CalendarIcon className="h-5 w-5" /> },
  { name: "Teams", href: "teams", icon: <UserGroupIcon className="h-5 w-5" /> },
  { name: "Directory", href: "directory", icon: <MagnifyingGlassCircleIcon className="h-5 w-5" /> },
  { name: "Announcements", href: "announcements", icon: <MegaphoneIcon className="h-5x w-5" /> },
  { name: "Office Map", href: "map", icon: <MapIcon className="h-5 w-5" /> },
];


const Layoutcopy = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

 

  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={!collapsed}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined className="text-white" /> : <MenuFoldOutlined className="text-white" />}
          onClick={() => setCollapsed(!collapsed)}
          className="h-16 !w-full text-base m-auto"
        />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
          {navigation.map((item, index) => (
            <Menu.Item key={index} icon={item.icon}>
              <Link key={index} to={item.href}>
                {item.name}
              </Link>
            </Menu.Item>
          ))}
          <Menu.Item key={nanoid()} icon={<UserIcon className="h-5 w-5" />}>
            <Admin/>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="p-0 mx-6 my-4" style={{ background: colorBgContainer }}>
          <User />
        </Header>
        <Content className="mx-6 my-6 p-6 min-h-[280]" style={{ background: colorBgContainer }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Layoutcopy;
