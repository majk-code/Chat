import React from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer from '../../components/MessageContainer/MessageContainer'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home