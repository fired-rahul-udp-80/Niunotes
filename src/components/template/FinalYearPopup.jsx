
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify'
import { MdClose } from "react-icons/md";
import { AppContext } from '../../context/AppContext';

const FinalYearPopup = ({ setPopup }) => {
  const { register,
     handleSubmit,
     reset,
    formState:{errors,isSubmitSuccessful} 
    } = useForm();
  const [file, setFile] = useState(null);
  const {getAllProject} = useContext(AppContext);
   
   

  const changeHandler = (event) => {

    setFile(event.target.files[0]);
     
    console.log("Selected file:", event.target.files[0]);

  };

  const submitFeedbackForm = async (data) => {
    
    const dismissId = toast.loading("Processing")
    try {
     
      const formData = new FormData();
      formData.append('projectName', data.projectName[0].toUpperCase()+data.projectName.substring(1));
      formData.append('video', file);

      const response = await fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/createProject`, {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      toast.dismiss(dismissId);
      if (!response.ok) {
        //toast.dismiss(dismissId);
        console.log(`Form submission failed with status: ${response.status}`);
        toast.error(result.message);
        return;
      }
     
      toast.success("New Project added Successfully");
      
      console.log("Form response:", result);
    }
      catch (error) {
      toast.dismiss(dismissId);
      console.error("Error during form submission:", error);
      toast.error("Error adding new project");
    }
     
    
    
  };
  useEffect(() =>{
    if(isSubmitSuccessful){
      reset({
      projectName:"",
      })
      getAllProject();
      setPopup(false);
      
    }
    
  },[reset,isSubmitSuccessful]);

  return (
    <div className=" w-screen h-full px-10 inset fixed z-20 flex left-0 justify-center top-[80px]">
      <div className="relative flex justify-center border backdrop-blur-lg max-h-[300px] w-[95%] md:w-[80%] gap-y-2 rounded-md shadow-2xl flex-col px-10  ">
        <MdClose onClick={()=>setPopup(false)} className="absolute top-2 right-2 text-3xl cursor-pointer font-bold" />
        <form onSubmit={handleSubmit(submitFeedbackForm)}

        className="w-full text-xl font-bold font-titleFont text-black  flex flex-col gap-y-5 mb-5 mt-5"
        >
          <div className=" flex flex-col  gap-y-2">
            <label htmlFor="projectname">Project Name<sup>*</sup></label>
            <input
              type="text"
              {...register('projectName', { required: true })}
              id="projectname"
              className="text-sm outline-none border-[1px] bg-white text-primaryColor py-3 rounded px-2 "
              placeholder="Project name.."
            />
            {
              errors.projectName && (
                <span className="text-sm text-red-700 animate-bounce pl-2">Project name is required</span>
              ) 
            }
          </div>
          <div className=" flex flex-col  gap-y-2">
            <label htmlFor="video">Preview video (1-5 min)</label>
            <input
              type="file"
              id="video"
              className="text-sm outline-none border-[1px] bg-white text-primaryColor py-3 rounded px-2 "
              onChange={changeHandler}
            />
          </div>
          <div>
            <button type="submit" className="text-secondaryColor bg-bgColor rounded-md px-10 md:px-20 py-3 hover:bg-opacity-90 hover:text-opacity-90 hover:scale-95 focus:outline-none duration-200">
              Send
            </button>  
          </div> 
        </form>
      </div>
    </div>
  );
};

export default FinalYearPopup;


