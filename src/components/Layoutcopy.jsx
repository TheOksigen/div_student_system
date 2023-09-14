//import { Fragment, useState } from 'react'
//import { Dialog, Transition } from '@headlessui/react'
//import {
//  Bars3Icon,
//  CalendarIcon,
//  HomeIcon,
//  MagnifyingGlassCircleIcon,
//  MapIcon,
//  MegaphoneIcon,
//  UserGroupIcon,
//  XMarkIcon,
//} from '@heroicons/react/24/outline'
//import { NavLink, Outlet } from 'react-router-dom'

//const navigation = [
//  { name: 'Dashboard', href: 'home', icon: HomeIcon, },
//  { name: 'Calendar', href: 'calendar', icon: CalendarIcon, },
//  { name: 'Teams', href: 'teams', icon: UserGroupIcon, },
//  { name: 'Directory', href: 'directory', icon: MagnifyingGlassCircleIcon, },
//  { name: 'Announcements', href: 'announcements', icon: MegaphoneIcon, },
//  { name: 'Office Map', href: 'map', icon: MapIcon, },
//]

//function classNames(...classes) {
//  return classes.filter(Boolean).join(' ')
//}

//export default function Layoutcopy() {
//  const [sidebarOpen, setSidebarOpen] = useState(false)
//  const [currentItem, setCurrentItem] = useState(null);

//  const handleNavItemClick = (item) => {
//    setCurrentItem(item);
//  };



//  return (
//    <>
//      <div className="flex h-full">
//        {/* for mobile */}
//        <Transition.Root show={sidebarOpen} as={Fragment}>
//          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
//            <Transition.Child
//              as={Fragment}
//              enter="transition-opacity ease-linear duration-300"
//              enterFrom="opacity-0"
//              enterTo="opacity-100"
//              leave="transition-opacity ease-linear duration-300"
//              leaveFrom="opacity-100"
//              leaveTo="opacity-0"
//            >
//              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
//            </Transition.Child>

//            <div className="fixed inset-0 z-40 flex">
//              <Transition.Child
//                as={Fragment}
//                enter="transition ease-in-out duration-300 transform"
//                enterFrom="-translate-x-full"
//                enterTo="translate-x-0"
//                leave="transition ease-in-out duration-300 transform"
//                leaveFrom="translate-x-0"
//                leaveTo="-translate-x-full"
//              >
//                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
//                  <Transition.Child
//                    as={Fragment}
//                    enter="ease-in-out duration-300"
//                    enterFrom="opacity-0"
//                    enterTo="opacity-100"
//                    leave="ease-in-out duration-300"
//                    leaveFrom="opacity-100"
//                    leaveTo="opacity-0"
//                  >
//                    <div className="absolute top-0 right-0 -mr-12 pt-2">
//                      <button
//                        type="button"
//                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                        onClick={() => setSidebarOpen(false)}
//                      >
//                        <span className="sr-only">Close sidebar</span>
//                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />

//                      </button>
//                    </div>
//                  </Transition.Child>
//                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
//                    <div className="flex flex-shrink-0 items-center px-4">
//                      <img
//                        className="h-8 w-auto"
//                        src="https://div.edu.az/img/logo-1.png?=1"
//                        alt="Your Company"
//                      />
//                    </div>
//                    <nav aria-label="Sidebar" className="mt-5">
//                      <div className="space-y-1 px-2">
//                        {navigation.map((item) => (
//                          <NavLink
//                            key={item.name}
//                            to={item.href}
//                            className={classNames(
//                              item.current
//                                ? 'bg-gray-100 text-gray-900'
//                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
//                              'group flex items-center px-2 py-2 text-base font-medium rounded-md'
//                            )}
//                          >
//                            <item.icon
//                              className={classNames(
//                                item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
//                                'mr-4 h-6 w-6'
//                              )}
//                              aria-hidden="true"
//                            />
//                            {item.name}
//                          </NavLink>
//                        ))}
//                      </div>
//                    </nav>
//                  </div>
//                  <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
//                    <a href="#" className="group block flex-shrink-0">
//                      <div className="flex items-center">
//                        <div>
//                          <img
//                            className="inline-block h-10 w-10 rounded-full"
//                            src="https://bazametrov.ru/uploads/new-agency/default_logo_user.jpg"
//                            alt=""
//                          />
//                        </div>
//                        <div className="ml-3">
//                          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
//                            David Mammedov
//                          </p>
//                          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">Front End Telebe</p>
//                        </div>
//                      </div>
//                    </a>
//                  </div>
//                </Dialog.Panel>
//              </Transition.Child>
//              <div className="w-14 flex-shrink-0" aria-hidden="true">
//                {/*Force sidebar to shrink to fit close icon*/}
//              </div>
//            </div>
//          </Dialog>
//        </Transition.Root>

//        {/* Static sidebar for desktop */}
//        <div className="hidden lg:flex lg:flex-shrink-0">
//          <div className="flex w-64 flex-col">
//            {/* Sidebar component, swap this element with another sidebar if you like */}
//            <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100">
//              <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
//                <div className="flex flex-shrink-0 items-center px-4">
//                  <img
//                    className="h-8 w-auto"
//                    src="https://div.edu.az/img/logo-1.png?=1"
//                    alt="Your Company"
//                  />
//                </div>
//                <nav className="mt-5 flex-1" aria-label="Sidebar">
//                  <div className="space-y-1 px-2">
//                    {navigation.map((item) => (
//                      <NavLink
//                        key={item.name}
//                        to={item.href}
//                        onClick={() => handleNavItemClick(item)}
//                        className={classNames(
//                          currentItem === item
//                            ? 'bg-gray-200 text-gray-900'
//                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
//                          'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
//                        )}
//                      >
//                        <item.icon
//                          className={classNames(
//                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
//                            'mr-3 h-6 w-6'
//                          )}
//                          aria-hidden="true"
//                        />
//                        {item.name}
//                      </NavLink>
//                    ))}
//                  </div>
//                </nav>
//              </div>
//              <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
//                <a href="#" className="group block w-full flex-shrink-0">
//                  <div className="flex items-center">
//                    <div>
//                      <img
//                        className="inline-block h-9 w-9 rounded-full"
//                        src="https://bazametrov.ru/uploads/new-agency/default_logo_user.jpg"
//                        alt=""
//                      />
//                    </div>
//                    <div className="ml-3">
//                      <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">David Mammedov</p>
//                      <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">Front End Telebe</p>
//                    </div>
//                  </div>
//                </a>
//              </div>
//            </div>
//          </div>
//        </div>
//        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
//          <div className="lg:hidden">
//            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
//              <div>
//                <img
//                  className="h-8 w-auto"
//                  src="https://div.edu.az/img/logo-1.png?=1"
//                  alt="Your Company"
//                />
//              </div>
//              <div>
//                <button
//                  type="button"
//                  className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
//                  onClick={() => setSidebarOpen(true)}
//                >
//                  <span className="sr-only">Open sidebar</span>
//                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//                </button>
//              </div>
//            </div>
//          </div>
//          <div className="relative z-0 flex flex-1 overflow-hidden">
//            <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
//              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
//                <Outlet />
//              </div>
//            </main>
//          </div>
//        </div>
//      </div>
//    </>
//  )
//}


import React, { useState } from 'react';
import { Bars3Icon, CalendarIcon, HomeIcon, MagnifyingGlassCircleIcon, MapIcon, MegaphoneIcon, UserGroupIcon, XMarkIcon, } from '@heroicons/react/24/outline'
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const navigation = [
  { name: 'Dashboard', href: 'home', icon: <HomeIcon className='h-6 w-6' />, },
  { name: 'Calendar', href: 'calendar', icon: <CalendarIcon className='h-6 w-6' />, },
  { name: 'Teams', href: 'teams', icon: <UserGroupIcon className='h-6 w-6' />, },
  { name: 'Directory', href: 'directory', icon: <MagnifyingGlassCircleIcon className='h-6 w-6' />, },
  { name: 'Announcements', href: 'announcements', icon: <MegaphoneIcon className='h-6 w-6' />, },
  { name: 'Office Map', href: 'map', icon: <MapIcon className='h-6 w-6' />, },
]

const Layoutcopy = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer }, } = theme.useToken();
  return (
    //<Layout className='h-full'>
    //  <Sider trigger={null} collapsible collapsed={collapsed}>
    //    <div className="demo-logo-vertical" />
    //    <Menu
    //      theme="dark"
    //      mode="inline"
    //      defaultSelectedKeys={['1']}
    //      items={[
    //        {
    //          key: '1',
    //          icon: <UserOutlined />,
    //          label: 'nav 1',
    //        },
    //        {
    //          key: '2',
    //          icon: <VideoCameraOutlined />,
    //          label: 'nav 2',
    //        },
    //        {
    //          key: '3',
    //          icon: <UploadOutlined />,
    //          label: 'nav 3',
    //        },
    //      ]}
    //    />
    //  </Sider>
    //  <Layout>
    //    <Header
    //      style={{
    //        padding: 0,
    //        background: colorBgContainer,
    //      }}
    //    >
    //      <Button
    //        type="text"
    //        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    //        onClick={() => setCollapsed(!collapsed)}
    //        style={{
    //          fontSize: '16px',
    //          width: 64,
    //          height: 64,
    //        }}
    //      />
    //    </Header>
    //    <Content
    //      style={{
    //        margin: '24px 16px',
    //        padding: 24,
    //        minHeight: 280,
    //        background: colorBgContainer,
    //      }}
    //    >
    //      Content
    //    </Content>
    //  </Layout>
    //</Layout>

    <Layout className='h-full'>
      <Sider trigger={null} collapsible collapsed={!collapsed}>
        <Button type="text" icon={collapsed ? <MenuUnfoldOutlined className='text-white' /> : <MenuFoldOutlined className='text-white' />} onClick={() => setCollapsed(!collapsed)} className='h-16 !w-full text-base m-auto' />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}
          items={
            navigation.map((item, index) => {
              return {
                key: index,
                icon: item.icon,
                label: item.name,
                
              }
            })
          }
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >Header

        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )


};
export default Layoutcopy;