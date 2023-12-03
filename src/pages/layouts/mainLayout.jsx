import Footer from 'components/Footer/Footer'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { ping } from 'redux/postThunk'

const MainLayout = () => {
  const { pong } = useSelector((state)=>state.postReducer);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(!pong){
      dispatch(ping());
    }
    else {
      console.log("pong");
    }
  },[pong])

    
  return (
    <>
      <IndexNavbar />
      <Outlet></Outlet>
      <Footer />
    </>
  )
}

export default MainLayout