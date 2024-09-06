import React, { useContext } from 'react'
import NotesCard from './NotesCard'
import NotesTemplate from './NotesTemplate'
import { AppContext } from '../../context/AppContext'
const year4 = ({notesBook1}) => {
    const {getSeventhSem,getEighthSem} = useContext(AppContext);
  return (
    <div className="grid md:grid-cols-2 gap-10 px-5">
            <div className="itemDiv  flex flex-col mt-5 gap-y-2 ">
                     <div>
                        <NotesTemplate 
                        title="7th Semester" />
                     </div>   
                {
                  notesBook1.map((subNotes) => {
                    
                        return (
                        <div key={subNotes.id} className="flex flex-col gap-y-5">
                            {  subNotes.sevenDetails?.map(({title,id}) => {
                                return (<div key={id} className="">
                                     <NotesCard 
                                     title = {title} getNotes={getSeventhSem} /> 
                                </div>)
                            
                            })}
                        </div>
                        )
                    })
                }
                </div>

                <div className="itemDiv  flex flex-col mt-5 gap-y-2 xl:w-[550px]">
                     <div>
                        <NotesTemplate 
                        title="8th Semester" />
                     </div>
                {
                  notesBook1.map((subNotes) => {
                        return (
                        <div key={subNotes.id} className="flex flex-col gap-y-5">
                            {  subNotes.eightDetails?.map(({title,id}) => {
                                return (<div key={id} className="">
                                     <NotesCard 
                                     title = {title} getNotes={getEighthSem} /> 
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

export default year4