import React from 'react'
import './NickChatParticipant.css'
import { dateOfJoin } from '../../../utils/dateOfJoin'
import useConversation from '../../../zustand/useConversation'

const NickChatParticipant = ({username , since}) => {
  const dateOfCreatedAccount = dateOfJoin(since)
  const {selectedConversation} = useConversation()

  return (
    <div className='nick-chat-participant'>
        <img className='selected-user-image' src={selectedConversation?.profilePic} alt="" />
        <div className="selected-user-info">
          <h1 className='nickname'>{username}</h1>
          <span className='date-of-join'>{`Dołączył ${dateOfCreatedAccount}`}</span>
        </div>
    </div>
  )
}

export default NickChatParticipant