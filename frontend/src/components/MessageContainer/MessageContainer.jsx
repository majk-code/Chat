import React, { useEffect } from 'react'
import './MessageContainer.css'
import NickChatParticipant from './NickChatParticipant/NickChatParticipant'
import MessagesWrapper from './MessagesWrapper/MessagesWrapper'
import MessageInput from './MessageInput/MessageInput'
import NoChatSelected from './NoChatSelected/NoChatSelected'
import useConversation from '../../zustand/useConversation'

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation()

  useEffect(() => {
    // cleanup function
    return () => setSelectedConversation(null)
    }
  ,[setSelectedConversation])

    console.log(selectedConversation)

  return (
    <div className='message-container'>
      {!selectedConversation 
      ? <NoChatSelected/> 
      : ( 
        <>
          <NickChatParticipant since={selectedConversation.createdAt} username={selectedConversation.fullName}/> 
          <MessagesWrapper/> 
          <MessageInput/>
        </> 
      )}
    </div>
  )
}


export default MessageContainer