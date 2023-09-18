import React, { useState } from 'react'
import { Outlet, useNavigate, useRoutes } from 'react-router-dom'
import Home from './components/Home'
import Calendar from './components/Calendar'
import Teams from './components/Teams'
import Directory from './components/Directory'
import Announcements from './components/Announcements'
import Map from './components/Map'

import Login from './login/Login'
import Layoutcopy from './components/core/Layoutcopy'
import Error from './components/Error,'

function App() {

  const [user, SetUser] = useState(false)
  const content = [user, SetUser]
  //useNavigate("/login")

  if (!user) {
    return useRoutes([
      {
        path: "/",
        element: (<Login content={content}/>)
      }
    ])
  } else {
    return useRoutes([
      {
        path: "/",
        element: (<Layoutcopy />),
        children: [
          { path: "home", element: <Home /> },
          { path: "calendar", element: <Calendar /> },
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