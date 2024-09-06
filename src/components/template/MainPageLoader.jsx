import React from 'react'
import "./Spinner.css"
const MainPageLoader = () => {
  return (
    <>
        <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="loader-main"></div>
        <span className="text-bgColor font-bold text-2xl font-titleFont">NiuNotes Hub</span>
        </div>
    </>
  )
}

export default MainPageLoader