import React from 'react'
import { SiOpenlayers } from "react-icons/si";
const Title = ({title,icon}) => {
  return (
    <div>
        <div className="w-full h-[300px] bg-bgColor flex justify-center items-center">
          <div className="text-secondaryColor text-3xl md:text-5xl font-semibold font-titleFont flex flex-col items-center justify-center text-center gap-y-3">
            <span>{icon}</span>
            <p>{title}</p>
          </div>
      </div>
    </div>
  )
}

export default Title