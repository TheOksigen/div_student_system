import React, { useState } from 'react'

function App() {
  const [user, SetUser] = useState(false)

  //auth.setuser(true)

  if (user) {
    <>Loading...</>
  }

  return (
    <div>App</div>
  )
}

export default App