import { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation'
import notification_sound from '../assets/notification.mp3'

const useListenMessages = () => {
  const {socket} = useSocketContext()
  const {messages,setMessages} = useConversation()

    useEffect(() => {
        socket?.on('newMessage',(newMessage) => {
            newMessage.shouldShake = true; 
            const sound = new Audio(notification_sound)
            sound.volume = 0.2
            sound.play()
            setMessages([...messages, newMessage])
        })

        return () => socket?.off('newMessage')
    }, [socket,setMessages,messages])
}

export default useListenMessages;