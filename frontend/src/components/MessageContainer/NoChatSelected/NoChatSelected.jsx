import React from 'react'
import './NoChatSelected.css'
import { useAuthContext } from '../../../context/AuthContext'
import logo_image from '../../../assets/logomain.png'

const NoChatSelected = () => {
  const {authUser} = useAuthContext()

  return (
    <div className='no-chat-selected'>
      <img className='no-chat-logo' src={logo_image} alt="" />
      <span className='welcome-text'>Witaj <span className='welcome-username'>{authUser.username}</span>, rozpocznij konwersację :)</span>
    </div>
  )
}

export default NoChatSelected