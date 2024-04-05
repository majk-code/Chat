import React from 'react'
import './Sidebar.css'
import SearchInput from './SearchInput/SearchInput'
import Conversations from './Conversations/Conversations'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SearchInput/>
      <Conversations/>
    </div>
  )
}

export default Sidebar