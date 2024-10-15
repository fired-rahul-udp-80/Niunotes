import React from 'react'
import hero_image from "../../assets/robot_prev_ui.png"
import syllabus from "../../assets/syllabus.pdf"
import waveImg from "../../assets/waveImg.svg"
import academic from "../../assets/Academic-Calendar.pdf"
import holidayList from "../../assets/NiuHoidayList.pdf"
import Notes from './Notes'
import Upload from './Upload'
import TypingSection from './TypingSection'
import Contact from './Contact'
import PortfolioLink from './PortfolioLink'
const Home = ({notesBook}) => {
  return (
    <div className="w-full h-full bg-homeScreen">

    
        <div className="bgimage flex  mt-[70px]  h-[625px] justify-between px-6 relative overflow-hidden items-center font-bodyFont">
            <div className="max-w-[1160px] h-full mx-auto flex items-center justify-center">
                <div className=" flex flex-col gap-y-6 z-20">
                    <div className="">
                    <h2 className="header-font font-semibold text-black text-5xl ">Niu Notes</h2>
                     
                    </div>
                    <p className="text-xl font-medium text-black text-justify">Your Ultimate resources hub for all NIU college materials.
                        Download and share to all.
                    </p>
                    <p className="text-md opacity-80 font-medium">Notes | Previous Year | Syllabus | Practical</p>
                    <div className="flex md:flex-row flex-col gap-10 mt-5">
                         <a href={syllabus} target="_blank" className="px-6 py-4 w-[40%] md:w-auto text-center bg-bgColor text-secondaryColor font-semibold rounded-md cursor-pointer hover:opacity-80 ">Syllabus</a>
                        <a href={holidayList} target="_blank" className="px-6 py-4 w-[70%] md:w-auto text-center bg-bgColor text-secondaryColor font-semibold rounded-md cursor-pointer hover:opacity-80 ">Holiday List</a>
                       
                        <a href={academic} target="_blank" className="px-6 py-4 w-[70%] md:w-auto text-center bg-bgColor text-secondaryColor font-semibold rounded-md cursor-pointer hover:opacity-80 ">Academic Calendar</a>
                    </div>
                </div>
                <div className="z-20 hidden lg:flex">
                    <img src={hero_image} alt="" className="max-w-[400px]"/>
                </div>
            </div>
            <div>
            <div className="box0 w-[80px] h-[80px]  absolute -bottom-100 left-[0%] rounded-lg "></div>
            <div className="box1 w-[80px] h-[80px] absolute -bottom-100 left-[10%] rounded-lg "></div>
            <div className="box2 w-[80px] h-[80px]  absolute -bottom-100 left-[20%] rounded-lg"></div>
            <div className="box3 w-[80px] h-[80px]  absolute -bottom-100 left-[30%] rounded-lg"></div>
            <div className="box4 w-[80px] h-[80px]  absolute -bottom-100 left-[40%] rounded-lg"></div>
            <div className="box5 w-[80px] h-[80px]  absolute -bottom-100 left-[50%] rounded-lg"></div>
            <div className="box6 w-[80px] h-[80px] absolute -bottom-100 left-[60%] rounded-lg"></div>
            <div className="box7 w-[80px] h-[80px]  absolute -bottom-100 left-[70%] rounded-lg"></div>
            <div className="box8 w-[80px] h-[80px]  absolute -bottom-100 left-[80%] rounded-lg"></div>
            <div className="box9 w-[80px] h-[80px]  absolute -bottom-100 left-[90%] rounded-lg"></div>
            <div className="box10 w-[80px] h-[80px] absolute -bottom-100 left-[100%] rounded-lg"></div>
            </div>
            <div className=" absolute left-0 bottom-0 w-screen">
                <img src={waveImg} alt={waveImg} loading="lazy"  className="wave-img w-full"/>
            </div>
        </div>
        
            <div >
                <Notes notesBook={notesBook} />
            </div>
            <div className="max-w-[1160px] mx-auto flex flex-col gap-y-20 relative">
              <div>
                <TypingSection
                     codeBlock =           
                      {`  <!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body><h1><a href="/heading">Heading</a></h1>\n<nav><a href="one/">One</a> <a href="/two">Two</a><a href="/two">Two</a>\n<a href="https://niu.edu.in">https://niu.edu.in</a>\n</nav>\n</body>`}
                        codeColor={"text-black-900"}

                />
            </div>
            <div>
                <Upload/>
            </div>
            {/* background gradient -color */}
            <div className="absolute -right-[300px] bottom-80 gradient-box bg-gradient-to-b from-blue-400 to-pink-500 shadow-richblue-400 blur-xl">

             </div>
             <div>
                <PortfolioLink/>
             </div>
        </div>
        <div>
            <Contact path ="/contact"  />
        </div>
    </div>
  )
}

export default Home
