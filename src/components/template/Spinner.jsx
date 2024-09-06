import React from 'react'
import "./Spinner.css"


export const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <span class="loader"></span>
        <p className="text-bgColor font-titleFont text-base">Loading....</p>
    </div>
  )
}

