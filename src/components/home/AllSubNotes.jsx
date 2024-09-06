import React, { useContext,useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom';
import { FaBackwardStep } from "react-icons/fa6";
import { Spinner } from '../template/Spinner';
import { useNavigate } from 'react-router-dom';
import {projectAPI} from "../../context/AllApi"
import {DeleteNotes} from "../../context/ApiConector"

const AllSubNotes = () => {
    const {subNotes,loading,} = useContext(AppContext);
    console.log("allsyn",subNotes);
    const navigate = useNavigate();

    function getId(id){
        console.log(id);
        DeleteNotes(projectAPI.DELETETHIRDSEM,id);
    }

    if(subNotes == 0 || undefined){
        return <div 
         className=" px-5 max-w-[1160px] mx-auto">
             
                        <div onClick={() =>navigate(-1)}
                        className="flex gap-1 mt-2 items-center cursor-pointer underline underline-offset-4 justify-start w-fit text-bgColor font-titleFont font-bold hover:opacity-80">
                            
                            <FaBackwardStep />
                            Back
                        </div>
           
            <div className="flex w-full min-h-[400px] items-center justify-center">
                <h1 className="text-3xl text-bgColor font-titleFont font-bold text-center mt-10">No Notes Avaialable </h1>
            </div>
        </div>
    }
     
     
  return (
    <>
    <div className="">
        <div className="bg-bgColor py-5 text-center text-secondaryColor font-titleFont font-semibold text-2xl">Your Study Material</div>
    
         
                <ul className="max-h-[600px] overflow-y-scroll no-scrollbar px-5 max-w-[1160px] mx-auto">
                
                    
                        <div onClick={() =>navigate(-1)}
                         className="flex gap-1 mt-2 items-center cursor-pointer underline underline-offset-4 justify-start w-fit text-bgColor font-titleFont font-bold hover:opacity-80">
                            
                            <FaBackwardStep />
                            Back
                        </div>
                    
                   
                
               <div  className="min-h-[500px] w-full flex flex-col gap-2 mt-5 justify-center items-center">

                {
                    loading ? (
                        <Spinner className=""/>
                    ) :
                     (  
                        <div className="flex flex-col justify-start min-h-[500px]  w-full">
                             {
                                
                                
                                subNotes?.map((subNote) =>{
                                    
                                    return (
                                        <li key={subNote._id} onClick={() =>{getId(subNote._id)}}
                                         className="flex flex-col rounded shadow-lg  bg-bgColor my-5 font-bodyFont font-medium">
                                            <div className="text-secondaryColor flex gap-x-5 justify-between items-center py-1 px-5 "> 
                                                <div className="flex flex-col gap-3">
                                                    <p className="text-lg capitalize">{subNote.subjectName}</p>
                                                    <p className="text-xs text-white opacity-45">Uploaded by Mr./Miss. {subNote.name}</p>
                                                </div>
                                                <div>
                                                    <a href={subNote.notes} download={subNote.notes} target="_blank" className="px-5 py-2 border rounded hover:opacity-70 border-slate-300">Download</a>
                                                </div>
                                            </div>
                                            
                                        </li>
                                    )
                                })
                            }
                        </div>
                     )
                }
               </div>
                </ul>
            
        
    </div>
    </>
  )
}

export default AllSubNotes