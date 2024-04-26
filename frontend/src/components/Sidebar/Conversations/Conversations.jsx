import React from 'react'
import './Conversations.css'
import Conversation from './Conversation'
import useGetConversations from '../../../hooks/useGetConversations';

const Conversations = () => {
  const { conversations } = useGetConversations()

  return (
    <>
    <h1 className='conversations-title'>Znajomi</h1>
    <div className='conversations'>
      {conversations.map((conversation) => {
        return (
          <Conversation
            key={conversation._id}
            conversation={conversation}
          />
        )
      })}
    </div>
    </>
  )
}

export default Conversations