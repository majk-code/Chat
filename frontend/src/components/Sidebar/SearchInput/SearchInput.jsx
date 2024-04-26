import React, { useState } from 'react'
import './SearchInput.css'
import useConversations from '../../../zustand/useConversation'
import useGetConversations from '../../../hooks/useGetConversations'
import search_icon from '../../../assets/search.png'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const {setSelectedConversation} = useConversations()
  const {conversations} = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    
    const conversation = conversations.find((el) => el.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation) {
      setSelectedConversation(conversation)
      setSearch('')
    } else alert.error('No user finded')
  }

  return (
    <>
    <h1 className='search-title'>Szukaj</h1>
    <form onSubmit={handleSubmit} className='search-input'>
      <img className='search-icon' src={search_icon} alt="" />
      <input type="text" placeholder='Wyszukaj znajomego...' 
      value={search}
      onChange={(e) => setSearch(e.target.value)}/>
    </form>
    </>
  )
}

export default SearchInput