import React, { useContext } from 'react'
import Title from '../template/Title'
import { RiQuestionAnswerFill } from "react-icons/ri";
import Card from '../template/Card'
import { GrNotes } from "react-icons/gr";
import Contact from '../home/Contact';
import { AppContext } from '../../context/AppContext';

const Previous_que = () => {
   const {getThirdSemQuest,getFourthSemQuest, getFifthSemQuest, getSixthSemQuest, getSeventhSemQuest, getEighthSemQuest} = useContext(AppContext )

  return (
    <div className="mt-[70px] flex flex-col gap-y-10">
      <Title
       title="Previous Year Question"
       icon = {<RiQuestionAnswerFill />}
      />

      <div className="max-w-[1160px] mx-auto flex flex-wrap justify-center gap-10">
        <Card
          icon={<GrNotes />}
          branch = "CSE | DS-CS | AIML"
          semester = "3rd Semester"
          set = "School of Engineering"
          btn = "View All"
          getData ={getThirdSemQuest}
        />
        <Card
          icon={<GrNotes />}
          branch = "CSE | DS-CS | AIML"
          semester = "4th Semester"
          set = "School of Engineering"
          btn = "View All"
          getData={getFourthSemQuest}
        />
        <Card
          icon={<GrNotes />}
          branch = "CSE | DS-CS | AIML"
          semester = "5th Semester"
          set = "School of Engineering"
          btn = "View All"
          getData={getFifthSemQuest}
        />
        <Card
          icon={<GrNotes />}
          branch = "CSE | DS-CS | AIML"
          semester = "6th Semester"
          set = "School of Engineering"
          btn = "View All"
          getData = {getSixthSemQuest}
        />
        <Card
          icon={<GrNotes />}
          branch = "CSE | DS-CS | AIML"
          semester = "7th Semester"
          set = "School of Engineering"
          btn = "View All"
          getData={getSeventhSemQuest}
        />
        <Card
          icon={<GrNotes />}
          branch = "CSE | DS-CS | AIML"
          semester = "8th Semester"
          set = "School of Engineering"
          btn = "View All"
          getData={getEighthSemQuest}
        />
         
      </div>
      
      <div>
            <Contact path ="/contact"  />
      </div>
    </div>
  )
}

export default Previous_que
