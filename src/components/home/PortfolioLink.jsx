import React from 'react'
import img from "../../assets/laptop.jpg"
import { GrPersonalComputer } from "react-icons/gr";
import { Link } from 'react-router-dom';
const PortfolioLink = () => {
  return (
    <div class="md:w-[1160px] mx-auto flex justify-center">
        <div className="w-[100%] md:w-[860px] h-[340px] flex gap-5 md:gap-10 justify-center mb-10 px-2 ">
            <div className="w-[15%] md:w-[18%]  h-[100%]  flex-none
            relative group transition-all duration-200 rounded-3xl ease-linear hover:grow">
                <img src={img} className="h-full  aspect-square rounded-3xl object-cover  group-hover:w-full duration-100 ease-linear" alt="" />
                <div className="absolute  w-full h-full bottom-0 flex justify-end  flex-col items-center z-10 py-5 px-5 gap-y-10">
                    <div className="">
                        <p className="text-white font-titleFont font-bold text-xl md:text-3xl text-center group-hover:text-3xl ">Rahul Kumar</p>
                        <p className="text-white text-sm font-bold text-center">(Portfolio)</p>
                   </div>
                    
                        <div className="flex gap-2 items-center hover:opacity-75 font-bodyFont">
                            <GrPersonalComputer className="text-white text-5xl font-bold bg-black rounded-full p-2"/> 
                            <a href="https://itsrahulkumar.netlify.app" target="_blank" className=" text-white text-xl font-bold hidden group-hover:inline-flex">Show me</a>
                        </div>
                    
                </div>
                <div className="absolute bottom-0 
                py-5 w-full h-full  bg-gradient-to-b from-[#fff]  to-[#000000] to-[80%] opacity-60 rounded-3xl">
                    
                </div>
            </div>
            <div className="w-[15%] md:w-[18%]  h-[100%]  flex-none
            relative group transition-all duration-200 rounded-3xl ease-linear hover:grow">
                <img src={img} className="h-full  aspect-square rounded-3xl object-cover  group-hover:w-full duration-100 ease-linear" alt="" />
                <div className="absolute  w-full h-full bottom-0 flex justify-end  flex-col items-center z-10 py-5 px-5 gap-y-10">
                <div className="">
                   <p className="text-white font-titleFont font-bold text-xl md:text-3xl text-center group-hover:text-3xl ">Sunny Raj</p>
                   <p className="text-white text-sm font-bold text-center">(Portfolio)</p>
                   </div>
                    
                        <div className="flex gap-2 items-center hover:opacity-75 font-bodyFont">
                            <GrPersonalComputer className="text-white text-5xl font-bold bg-black rounded-full p-2"/> 
                            <a href="/" className=" text-white text-xl font-bold hidden group-hover:inline-flex">Show me</a>
                        </div>
                    
                </div>
                <div className="absolute bottom-0 
                py-5 w-full h-full  bg-gradient-to-b from-[#fff]  to-[#000000] to-[80%] opacity-60 rounded-3xl">
                    
                </div>
            </div>
            <div className="w-[15%] md:w-[18%]  h-[100%]  flex-none
            relative group transition-all duration-200 rounded-3xl ease-linear hover:grow">
                <img src={img} className="h-full  aspect-square rounded-3xl object-cover  group-hover:w-full duration-100 ease-linear" alt="" />
                <div className="absolute  w-full h-full bottom-0 flex justify-end  flex-col items-center z-10 py-5 px-5 gap-y-10">
                <div className="">
                   <p className="text-white font-titleFont font-bold text-xl md:text-3xl text-center group-hover:text-3xl ">Adarsh Sahani</p>
                   <p className="text-white text-sm font-bold text-center">(Portfolio)</p>
                   </div>
                    
                        <div className="flex gap-2 items-center hover:opacity-75 font-bodyFont">
                            <GrPersonalComputer className="text-white text-5xl font-bold bg-black rounded-full p-2"/> 
                            <a href="/" className=" text-white text-xl font-bold hidden group-hover:inline-flex">Show me</a>
                        </div>
                    
                </div>
                <div className="absolute bottom-0 
                py-5 w-full h-full  bg-gradient-to-b from-[#fff]  to-[#000000] to-[80%] opacity-60 rounded-3xl">
                    
                </div>
            </div>
            <div className="w-[15%] md:w-[18%]  h-[100%]  flex-none
            relative group transition-all duration-200 rounded-3xl ease-linear hover:grow">
                <img src={img} className="h-full  aspect-square rounded-3xl object-cover  group-hover:w-full duration-100 ease-linear" alt="" />
                <div className="absolute  w-full h-full bottom-0 flex justify-end  flex-col items-center z-10 py-5 px-5 gap-y-10">
                   <div className="">
                   <p className="text-white font-titleFont font-bold text-xl md:text-3xl text-center group-hover:text-3xl ">Bibek Kumar</p>
                   <p className="text-white text-sm font-bold text-center">(Portfolio)</p>
                   </div>
                    
                        <div className="flex gap-2 items-center hover:opacity-75 font-bodyFont">
                            <GrPersonalComputer className="text-white  text-5xl font-bold bg-black rounded-full p-2"/> 
                            <a href="/" className=" text-white text-xl font-bold hidden group-hover:inline-flex">Show me</a>
                        </div>
                    
                </div>
                <div className="absolute bottom-0 
                py-5 w-full h-full  bg-gradient-to-b from-[#fff]  to-[#000000] to-[80%] opacity-60 rounded-3xl">
                    
                </div>
            </div>
            
             
            
        </div>
    </div>
  )
}

export default PortfolioLink
