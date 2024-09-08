import React from 'react'
import Title from '../template/Title'
import { GrNotes } from "react-icons/gr";
import Notes from '../home/Notes';
import Contact from '../home/Contact';
const NotesPage = () => {
  return (
    <div className="mt-70px] flex flex-col gap-y-10">
      <Title
        title="All Year Notes"
        icon = {<GrNotes />}
      />
      <div className="max-w-[1160px] mx-auto">
        <Notes/>
      </div>
      <div>
            <Contact path ="/contact"  />
      </div>
    </div>
  )
}

export default NotesPage
