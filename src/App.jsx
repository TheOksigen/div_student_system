import React, { useState } from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './login/Login'

function App() {
  const [user, SetUser] = useState(false)

  //auth.setuser(true)

  if (!user) {
    return useRoutes([
      {
        path: "/",
        element: (
          <>
            <Login />
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
            <Layout />
            <Outlet />
          </>
        ),
        children: [
          {
            path: "",
            element: <Home />
          }
        ]
      }
    ]
    )
  }
}

export default App