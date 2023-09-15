import React, { useContext } from 'react'
import { DataContext } from '../service/DataContex';

function Home() {
  const data = useContext(DataContext)
  console.log(data);

  return (
    <div>Home</div>
  )
}

export default Home