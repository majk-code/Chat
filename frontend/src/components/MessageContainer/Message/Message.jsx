import React from 'react';
import './Message.css';
import { useAuthContext } from '../../../context/AuthContext'
import useConversation from '../../../zustand/useConversation'
import { extractTime } from '../../../utils/extractTime';

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const fromMe = message.senderId === authUser._id; 
  const formattedTime = extractTime(message.createdAt)
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const shakeClass = message.shouldShake ? 'shake' : '';

  return (
    <>
    <div className={fromMe ? 'container-right' : 'container-left' }>
      <div className={`${fromMe ? 'message-me' : 'message-friend'} ${shakeClass}`}>
        {message.message}
      </div>
      <span className='date-of-send'>{formattedTime}</span>
    </div>
    </>
  );
};

export default Message;