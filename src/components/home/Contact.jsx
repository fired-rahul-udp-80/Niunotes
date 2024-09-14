import React, { useContext } from 'react'
import { IoBookSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
const Contact = () => {

  const {navItems1} = useContext(AppContext);

  return (
    <div className="footer-bg px-6 py-8">
        <div className=" flex md:flex-row flex-col justify-between items-start  max-w-[1160px] mx-auto gap-y-4 py-5 gap-x-1">
          <div className="flex w-full md:w-[15%] justify-start text-secondaryColor font-bold gap-x-2 text-3xl ">
            <IoBookSharp  />
            <p>NIU NOTES</p>
          </div>
          <div className="flex sm:flex-row flex-col items-center gap-x-10 gap-y-5 md:w-[80%] justify-between">
            <div className="w-full md:w-[50%] flex flex-col gap-y-3 font-medium font-titleFont text-secondaryColor">
              <p className="text-xl">Made with Love 💖</p>
              <p className="text-justify">NIU Notes - Your ultimate resource hub for all NIU college materials. Download and share notes, previous year questions, assignments and solutions. Join the NIU community and contribute your study materials.</p>
            </div>
            <div className="w-full md:w-[50%]">
              <form action="" className='flex'>
                <input className="w-full py-3 rounded-l-md  px-2 bg-boxColor outline-none border-none"
                type="email" placeholder="Email Address" />
                <a href="mailto:niunotes2024@gmail.com">
                <div className="py-3 px-8 bg-bgColor rounded-r-md flex justify-center items-center text-secondaryColor font-semibold font-titleFont cursor-pointer hover:opacity-80 outline-none border-0">
                  <IoIosSend />
                  <button>Send</button>
                </div>
                </a>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <ul className='flex gap-3 flex-wrap justify-center items-center'>
             {
              navItems1.map(({title,id,link}) =>{
                return (
                 <Link to={link}>
                       <li key={id} className="px-2 hover:opacity-80 font-medium font-titleFont py-2 rounded-lg text-sm  bg-boxColor">{title}</li>
                 </Link>
                )
              })
             }
          </ul>
        </div>
        <div className=" font-medium font-titleFont mt-5 text-center">
          <div className="footer-name-border mb-3"></div>
          <span className="text-secondaryColor">Designed by - Rahul Kumar ||</span>
          <span className="text-secondaryColor"> Distributed by Our Team (2022-2026)</span>
        </div>
    </div>
  )
}

export default Contact
