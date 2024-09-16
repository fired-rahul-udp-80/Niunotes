import React, { useContext } from 'react'
import FinalYearPopup from '../template/FinalYearPopup'
import { useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
// import {getAllProject} from "../../context/ApiConector"
// import {projectAPI} from "../../context/AllApi";
import {Spinner} from '../template/Spinner';

const FinalProject = ({notesBook1}) => {
  const [popup, setPopup] = useState(false); 
  const {projectList,loading,getAllProject} = useContext(AppContext);
  if(projectList == 0||undefined){
    return (
        <div className="">
            <div className="flex w-full min-h-[400px] items-center justify-center">
                <h1 className="text-3xl text-bgColor font-titleFont font-bold text-center mt-10">No Project Avaialable </h1>
            </div>
        </div>
    )
  }
  //const [loading, setLoading] = useState(false);
  //const [projectList, setProjectList] = useState();

  
  // async function getData() {
  //   setLoading(true);
  //   const result = await getAllProject(projectAPI.GETPROJECT);
  //   const dataArray = result.data;
  //   console.log(dataArray);
  //   setLoading(false);
  //   setProjectList(dataArray);
  // }


  useEffect(() => {
    getAllProject();
  
  },[])
  return (
    <div className="max-w-[1160px] w-full flex flex-col justify-center items-center pt-10 relative">
      {
        loading ?
        (
           <div className="absolute top-20">
            <Spinner />
           </div>
        ) : 
        (
          <div className="w-full max-h-screen overflow-y-scroll no-scrollbar flex flex-col gap-y-5 px-5 md:px-0">
                     
                     {
                         projectList?.map((object) => {
                          
                             return (
                             <div key={object._id} className="flex flex-col gap-y-5 ">
                                <div className="notes-card p-10 flex flex-col gap-y-5 rounded cursor-pointer hover:shadow-xl duration-300 border">
                                  <h1 className="text-primaryColor text-2xl font-bold font-titleFont">{object.projectName}</h1>
                                  {
                                    object.video && (
                                      <a target="_blank" href={object.video} className="px-5 py-2 w-fit bg-bgColor text-secondaryColor hover:opacity-80 font-medium">Preview</a>
                                    )
                                  }
                                </div>
                             </div>
                              )
                         })
                     } 
                     <div className="w-[100%]">
                      <button
                      onClick={() =>setPopup(true)}
                      className="md:px-10 md:py-4 px-6 py-2 rounded bg-bgColor text-secondaryColor hover:opacity-80 font-medium">ADD PROJECT</button>
                     </div>
          </div>
      
         
        )
      }
      {
          popup ?( <FinalYearPopup setPopup={setPopup} />):(<div></div>)
      }
           
         
      
      
    </div>
  )
}

export default FinalProject
