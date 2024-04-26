import React from 'react'
import './SettingBar.css'
import home_icon from '../../assets/homepage.png'
import setting_icon from '../../assets/setting.png'
import { useAuthContext } from '../../context/AuthContext'
import LogoutButton from '../SideBar/LogoutButton/LogoutButton'

const SettingBar = () => {
  const {authUser} = useAuthContext()

  return (
    <div className='setting-bar'>
      <img className='setting-bar-image' src={authUser.profilePic} alt="" />
      <div className="setting-icons">
        <img onClick={() => {window.location.reload()}} src={home_icon} alt="" />
        <LogoutButton/>
        <img src={setting_icon} alt="" />
      </div>
    </div>
  )
}

export default SettingBar