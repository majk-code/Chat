import React, { useEffect, useRef } from 'react'
import './MessagesWrapper.css'
import useGetMessages from '../../../hooks/useGetMessages'
import Message from '../Message/Message'
import useListenMessages from '../../../hooks/useListenMessages'
import useConversation from '../../../zustand/useConversation'

const MessagesWrapper = () => {
  const {selectedConversation} = useConversation()
  const {messages} = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();
    
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView()
  },[messages])
  
  return (
    <div className='messages-wrapper'>
      {messages.length > 0 ? messages.map((message) => (
        <div key={message._id} ref={lastMessageRef}>
          <Message message={message}/>
        </div>
      )) : null}
      {messages.length === 0 ? (<h1 className='welcome-text-chat'>Rozpocznij rozmowę z <span className='welcome-text-username'>{selectedConversation.fullName}</span> :)</h1>) : null}
    </div>
  )
}

export default MessagesWrapper