import Footer from 'components/Footer/Footer'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { ping } from 'redux/postThunk'

const MainLayout = () => {
  const { pong } = useSelector((state=>postReducer));
  const dispatch = useDispatch();

  useEffect(async ()=>{
    dispatch(ping());
    if(pong) console.log("pong");
  },[])

    
  return (
    <>
      <IndexNavbar />
      <Outlet></Outlet>
      <Footer />
    </>
  )
}

export default MainLayout