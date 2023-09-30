import React, { useState } from 'react'
import { Outlet, useNavigate, useRoutes } from 'react-router-dom'
import Home from './components/Home'
import Calendar from './components/Calendar'
import Teams from './components/Teams'
import Directory from './components/Directory'
import Announcements from './components/Announcements'
import Map from './components/Map'
import Grouptable from './components/Grouptable'
import "./output.css"
import Login from './login/Login'
import Layoutcopy from './components/core/Layoutcopy'
import Error from './components/Error,'

function App() {
  console.log();
  const [user, SetUser] = useState(true)
  const content = [user, SetUser]
  //useNavigate("/login")

  if (!user) {
    return useRoutes([
      {
        path: "/",
        element: (<Login content={content} />)
      }
    ])
  } else {
    return useRoutes([
      {
        path: "/",
        element: (<Layoutcopy />),
        children: [
          { path: "home", element: <Home /> },
          { path: "calendar", element: <Calendar />, },
          { path: "calendar/group_table", element: <Grouptable /> },
          { path: "teams", element: <Teams /> },
          { path: "directory", element: <Directory /> },
          { path: "announcements", element: <Announcements /> },
          { path: "map", element: <Map /> },
        ]
      },
      {
        path: "/*",
        element: (<Error />)
      }
    ]
    )
  }
}

export default App