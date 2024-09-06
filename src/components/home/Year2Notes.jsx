import React, { useContext ,useEffect} from 'react'
import NotesCard from './NotesCard'
import { motion } from 'framer-motion'
import NotesTemplate from './NotesTemplate'
import { AppContext } from '../../context/AppContext'
const Year2Notes = ({notesBook1}) => {

    const {getThirdSem,getFourthSem} = useContext(AppContext);
    
    
  return (
    <div className="grid md:grid-cols-2 gap-10 px-5">
            <div className="itemDiv  flex flex-col mt-5 gap-y-5 xl:w-[550px]">
                    <div>
                        <NotesTemplate 
                        title="3rd Semester" />
                     </div>   
                {
                  notesBook1.map((subNotes) => {
                        return (
                        <div key={subNotes.id} className="flex flex-col gap-y-5">
                            {  subNotes.thirdDetails?.map(({title,id}) => {
                                return (<div key={id} className="">
                                     <NotesCard 
                                     title = {title} getNotes={getThirdSem} /> 
                                </div>)
                            
                            })}
                        </div>
                        )
                    })
                }
            </div>

                <div className="itemDiv  flex flex-col mt-5  gap-y-5">
                     <div>
                        <NotesTemplate 
                        title="4th Semester" />
                     </div>
                {
                  notesBook1.map((subNotes) => {
                        return (
                        <div key={subNotes.id} className="flex flex-col gap-y-5">
                            {  subNotes.fourthDetails?.map(({title,id}) => {
                                return (<div key={id} className="">
                                     <NotesCard 
                                     title = {title} getNotes={getFourthSem} /> 
                                </div>)
                            
                            })}
                        </div>
                        )
                    })
                }
                </div>
            </div>
  
  )
}

export default Year2Notes