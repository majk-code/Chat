import React from 'react'
import '../Sidebar.css'
import useLogout from '../../../hooks/useLogout'
import logout_icon from '../../../assets/logout.png'

const LogoutButton = () => {
    const {logout} = useLogout()
  return (
    <div className='logout-button'>
        <img onClick={logout} className='logout-image' src={logout_icon} alt="" />
    </div>
  )
}

export default LogoutButton