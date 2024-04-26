import React from 'react'
import './SettingBar.css'
import home_icon from '../../assets/homepage.png'
import setting_icon from '../../assets/setting.png'
import { useAuthContext } from '../../context/AuthContext'
import useLogout from '../../hooks/useLogout'
import logout_icon from '../../assets/logout.png'

const SettingBar = () => {
  const {authUser} = useAuthContext()
  const {logout} = useLogout()

  return (
    <div className='setting-bar'>
      <img className='setting-bar-image' src={authUser.profilePic} alt="" />
      <div className="setting-icons">
        <img onClick={() => {window.location.reload()}} src={home_icon} alt="" />
        <div className='logout-button'>
          <img onClick={logout} className='logout-image' src={logout_icon} alt="" />
        </div>
        <img src={setting_icon} alt="" />
      </div>
    </div>
  )
}

export default SettingBar