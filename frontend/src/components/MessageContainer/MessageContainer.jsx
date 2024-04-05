import React from 'react'
import './MessageContainer.css'
import NickChatParticipant from './NickChatParticipant/NickChatParticipant'
import MessagesWrapper from './MessagesWrapper/MessagesWrapper'
import MessageInput from './MessageInput/MessageInput'
import NoChatSelected from './NoChatSelected/NoChatSelected'

const MessageContainer = () => {
  const noChatSelected = true;

  return (
    <div className='message-container'>
      {noChatSelected 
      ? <NoChatSelected/> 
      : ( 
        <>
          <NickChatParticipant/> 
          <MessagesWrapper/> 
          <MessageInput/>
        </> 
      )}
    </div>
  )
}


export default MessageContainer