import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Contact from '../components/Contact'

const contactpage = () => {
  return (
    <>
      <div>
        <Navbar blendIntoColor={true} />
        <Sidebar />
        <Contact />
      </div>
    </>
  )
}

export default contactpage
