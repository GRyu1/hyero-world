import Footer from 'components/Footer/Footer'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    
  return (
    <>
      <IndexNavbar />
      <Outlet></Outlet>
      <Footer />
    </>
  )
}

export default MainLayout