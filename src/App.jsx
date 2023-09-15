import React, { useState } from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import Home from './components/Home'
import Calendar from './components/Calendar'
import Teams from './components/Teams'
import Directory from './components/Directory'
import Announcements from './components/Announcements'
import Map from './components/Map'

import Login from './login/Login'
import Layoutcopy from './components/Layoutcopy'

function App() {

  const [user, SetUser] = useState(false)
  const content = [user, SetUser]
  //auth.setuser(true)

  if (user) {
    return useRoutes([
      {
        path: "/",
        element: (
          <>
            <Login user={user} SetUser={SetUser} />
          </>
        )
      }
    ]
    )
  } else {
    return useRoutes([
      {
        path: "/",
        element: (
          <>
            {/*<Layout />*/}
            <Layoutcopy />
            {/*<Outlet />*/}
          </>
        ),
        children: [
          { path: "home", element: <Home /> },
          { path: "calendar", element: <Calendar /> },
          { path: "teams", element: <Teams /> },
          { path: "directory", element: <Directory /> },
          { path: "announcements", element: <Announcements /> },
          { path: "map", element: <Map /> },
        ]
      }
    ]
    )
  }
}

export default App