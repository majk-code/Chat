import './Conversation.css'
import useConversation from '../../../zustand/useConversation'
import { useSocketContext } from '../../../context/SocketContext'

const Conversation = ({conversation}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)
  const isSelected = selectedConversation?._id === conversation._id

  return (
    <div onClick={() => setSelectedConversation(conversation)} className={isSelected ? 'conversation-selected' : 'conversation'}>
      <div className="avatar">
        <div className={isOnline? 'online' : 'offline'}>
          <img className='profile-pic-image' src={conversation.profilePic} alt="" />
        </div>
      </div>
      <span className='nickname'>
        {conversation.fullName}
      </span>
    </div>
  )
}

export default Conversation