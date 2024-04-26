import React from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer from '../../components/MessageContainer/MessageContainer'
import SettingBar from '../../components/SettingBar/SettingBar'

const Home = () => {
  return (
    <div className='home'>
      <SettingBar/>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home