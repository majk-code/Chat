import React, { useState } from 'react'
import './MessageInput.css'
import useSendMessage from '../../../hooks/useSendMessage'
import send_icon from '../../../assets/send.png'

const MessageInput = () => {
  const [message, setMessage] = useState('')
  const {sendMessage} = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <div className='message-input-wrapper'>
    <form onSubmit={handleSubmit} className='message-input'>
      <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder='Wyślij wiadomość..'/>
      <img onClick={handleSubmit} className='send-icon' src={send_icon} alt="" />
    </form>
    </div>
  )
}

export default MessageInput
