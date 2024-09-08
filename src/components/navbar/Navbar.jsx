import React, { useState,useContext } from 'react'
import { NavLink } from 'react-router-dom'
 
import { RiMenu3Fill } from "react-icons/ri";

import { MdClose } from "react-icons/md";
import { AppContext } from '../../context/AppContext';

const Navbar = () => {

    const {navItems1} = useContext(AppContext);
     
    const [isVisible, setIsVisible] = useState(false);
   
    
  return (
    <div id="navbar" className=" w-full h-[70px] shadow-shadowOne bg-boxColor fixed top-0 z-50">
        <div className="max-w-[1160px] h-full mx-auto z-50 flex justify-between px-6  items-center text-primaryColor font-titleFont">
            <div className="content">
                 <img src="" alt="" />
                <h2 className="nav-part text-4xl font-bold">Niu notes</h2>
                
                 
            </div>
            <div className='md:flex md:gap-6 gap-8 font-[600] list-none cursor-pointer hidden lg:text-lg z-50 '>
                  {
                    navItems1.map( (item) =>{
                        return (<li key={item.id} className="hover:text-bgColor hover:underline underline-offset-[9px] transition-all duration-200 ">
                            <NavLink to={item.link} activeClassName="active">{item.title}</NavLink>
                        </li>)
                    })
                  }
            </div>
            <div className="text-3xl md:hidden cursor-pointer ">
             {
                isVisible ? <MdClose  onClick={() => setIsVisible(false)} /> : <RiMenu3Fill onClick={() => setIsVisible(true)} />
             }
            
            </div>
            <div className={`w-[100%] h-screen md:hidden z-50 fixed top-16 pt-6 right-0 bg-gray-300  flex flex-col gap-y-14 list-none cursor-pointer text-lg font-semibold origin-top
                ${isVisible ? "scale-y-1" : "scale-y-0"} duration-200`}>
                  {
                    navItems1.map( (item) =>{
                        return (<li key={item.id} onClick={() => setIsVisible(false)}  className="text-center hover:text-bgColor hover:opacity-65 hover:underline underline-offset-[9px] transition-all duration-200">
                            <NavLink to={item.link} activeClassName="active">{item.title}</NavLink>
                        </li>)
                    })
                  }
            </div>
        </div>
    </div>
  )
}

export default Navbar
