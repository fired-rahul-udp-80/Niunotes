import React from 'react'
import { TypeAnimation } from 'react-type-animation'
const TypingSection = ({codeBlock, codeColor}) => {
  return (
    <div className="w-full flex md:flex-row flex-col gap-10 py-5 gap-x-10 justify-between px-5">
        <div className="w-full md:w-[50%] flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-6">
                <p className="font-titleFont text-5xl font-bold text-center md:text-left">Start <div className="text-bgColor">coding in seconds</div></p>
                <p className="font-bodyFont text-lg text-gray-600 font-semibold">Go ahead, give it a try, Our hands-on learning environment means you'll be writing code from your very first lesson. </p>
            </div>
            <div className="flex gap-y-10 gap-20 items-center md:flex-row flex-col-reverse">
                <div className="px-6 py-4 w-[70%] flex items-center justify-center h-[150px] bg-slate-200 md:w-auto text-center border border-slate-400 text-primaryColor font-semibold rounded-md cursor-pointer hover:opacity-80 ">Continue <br /> Learning with consistency</div>
                <div className="px-6 py-4 w-[50%] h-[110px] md:w-auto text-center border text-primary border-slate-400 font-semibold rounded-md cursor-pointer hover:opacity-80 flex items-center justify-center">Learn more <br /> get knowledge</div>
            </div>
         
        </div>
        <div className=" py-5 bg-blue-100 md:w-[50%] md:max-w-[500px] flex relative">
            {/* background gradient -color */}
            <div className="absolute left-20 gradient-box bg-gradient-to-b from-purple-700 to-pink-500 shadow-richblue-400 blur-2xl">

             </div>
            <div className="text-center flex flex-col w-[10%] text-gray-700 font-inter font-bold">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                    <p>12</p>
                    <p>13</p>
                    <p>14</p>
                </div>

                <div className={`w-[90%] flex flex-col z-50 gap-3 font-bold  ${codeColor} pr-2`}>
                    <TypeAnimation
                       sequence={[codeBlock, 2000, ""]}
                       repeat = {Infinity}
                       cursor = {true}
                       omitDeletionAnimation={true}

                       style = {
                        {
                            whiteSpace:"pre-line",
                            display:"block",
                        }
                       }
                    />
                </div>
        </div>
    </div>
  )
}

export default TypingSection