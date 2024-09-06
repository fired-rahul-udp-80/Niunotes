import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';

const NotesCard = ({title,getNotes}) => {
  const {setPrivateRoute} = useContext(AppContext);
  function getSemNotes(){
    getNotes();
    setPrivateRoute(true);

  }
  
    
  return (
    <div className="flex flex-col ">
        
          <ul className=" ">
             <Link to="semesterNotes">
             <li onClick={getSemNotes} className=" py-3 sm:py-5 px-10 text-center bg-slate-200 shadow-xl rounded border-[1px] cursor-pointer hover:bg-white hover:text-primaryColor font-bodyFont font-medium">{title}</li>
             </Link>
          </ul> 
        
    </div>
  )
}

export default NotesCard