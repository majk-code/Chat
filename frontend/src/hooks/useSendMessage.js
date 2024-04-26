import useConversation from '../zustand/useConversation'

const useSendMessage = () => {
    const {messages, setMessages, selectedConversation} = useConversation();

    const sendMessage = async (message) => {
        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({message})
            })

            const data = await res.json()
            if (data.error) alert(data.error)
            console.log(data)
            setMessages([...messages,data])
        } catch (error) {
            alert(error.message)
        }
    }

    return { sendMessage }
}

export default useSendMessage;