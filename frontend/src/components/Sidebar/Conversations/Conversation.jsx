import React from 'react'
import './Conversation.css'
import avatar from '../../../assets/avatar.webp'

const Conversation = () => {

  return (
    <div className='conversation'>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <span className='nickname'>
        rafal130pl
      </span>
    </div>
  )
}

export default Conversation