import React, { useContext, useState,useEffect } from 'react'
import Contact from '../home/Contact'
import { useForm } from 'react-hook-form';
import { projectAPI } from '../../context/AllApi';
import { getData } from '../../context/ApiConector';
import Popup from '../template/Popup';
import {AppContext} from "../../context/AppContext"
import FeedbackSlider from './FeedbackSlider';
import {toast} from 'react-toastify'
//import { useNavigate } from 'react-router-dom';
 

const FeedbackForm = () => {
    const {getAllFeedback} = useContext(AppContext);
    const [file, setFile] = useState();
    const [popup, setPopup] = useState(false);
    const [bkFormData,setBkFormData] = useState();
    //const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState:{errors,isSubmitSuccessful} } = useForm();
    
    const changeHandler = (event) =>{
        const file = event.target.files[0];
        setFile(file);
         
        console.log("Selected file:", event.target.files[0]);
    }

    const submitFeedbackForm = async(data) =>{
        console.log("Logging Data:",data);
        const toastId = toast.loading("Processing")
        try{
            const formData = new FormData();
            formData.append('firstName',data.firstName[0].toUpperCase()+data.firstName.substring(1));
            formData.append('lastName',data.lastName[0].toUpperCase()+data.lastName.substring(1));
            formData.append('email',data.email.toLowerCase());
            formData.append('profileImage',file);
            formData.append('feedback',data.feedback[0].toUpperCase()+data.feedback.substring(1));
           
            
            const response = await fetch(projectAPI.SENDFEEBACK,{
                method:'POST',
                body:formData,
            });
            const result = await response.json();
            console.log("Form response:", result);
            toast.dismiss(toastId);
            if(!response.ok){
                toast.error(result.message);
            }
            else{
                setBkFormData(result.data);
                setPopup(true);
            }
                
            
        }catch(error){
            toast.dismiss(toastId);
            console.error("Error during form submission:", error);
            toast.error(`Form submission failed with status: ${response.status}`)
        }  
        
    }    

    useEffect( () =>{

        if(isSubmitSuccessful){
            reset({
                firstName:"",
                lastName:"",
                email:"",
                profileImage:"",
                feedback:"",
            })
            getAllFeedback();
        }
        
    },[reset,isSubmitSuccessful]);
    

    useEffect( () =>{
        getAllFeedback();
    },[]);
  return (
    <div className="mt-[80px]" >
        <div className="max-w-[1160px] mx-auto space-y-5 px-5">
            <h2 className="bg-bgColor text-xl  text-secondaryColor text-center font-titleFont py-5 rounded-md">Feedback Form</h2>
            <div>
                <form onSubmit={handleSubmit(submitFeedbackForm)}>
                    <div className="w-full text-xl font-medium font-titleFont text-primaryColor flex flex-col gap-y-5 mb-10">
                        <div className="w-full flex md:flex-row flex-col justify-between gap-y-5">
                            <div className=" md:w-[48%] flex flex-col gap-y-2">
                                <label htmlFor="firstname">First Name<sup>*</sup></label>
                                <input type="text"
                                    name="firstName"
                                    id="firstname"
                                    className=" text-sm outline-none border-[1px]  border-red-800 py-3 rounded px-2"
                                    placeholder="Enter first name"
                                    {...register("firstName",{required:true})}
                                />
                                {
                                    errors.firstName && (
                                        <span className="text-sm w-fit bg-bgColor text-secondaryColor px-5 py-1 rounded animate-bounce" >Please enter your first name</span>
                                    )
                                }
                            </div>

                            <div className="md:w-[48%] flex flex-col  gap-y-2">
                                <label htmlFor="lastname">Last Name<sup>*</sup></label>
                                <input type="text"
                                    name="lastName"
                                    id="lastname"
                                    className="text-sm outline-none border-[1px]  border-red-800 py-3 rounded px-2"
                                    placeholder="Enter last name"
                                    {...register("lastName",{required:true})}
                                />
                                {
                                    errors.lastName && (
                                        <span className="text-sm w-fit bg-bgColor text-secondaryColor px-5 py-1 rounded animate-bounce" >Please enter your last name</span>
                                    )
                                }
                            </div>
                        </div>
                        <div className=" flex flex-col  gap-y-2">
                                <label htmlFor="email">Email Address <sup>*</sup></label>
                                <input type="email"
                                    name="email"
                                    id="email"
                                    className="text-sm outline-none border-[1px]  border-red-800 py-3 rounded px-2"
                                    placeholder="Enter email Address"
                                    {...register("email",{required:true})}
                                />
                                {
                                    errors.email && (
                                        <span className="text-sm w-fit bg-bgColor text-secondaryColor px-5 py-1 rounded animate-bounce" >Please enter your email</span>
                                    )
                                }
                            </div>
                            <div className=" flex flex-col  gap-y-2">
                                <label htmlFor="profileImage">Profile Photo</label>
                                <input type="file"
                                    accept="image/png, image/jpg, image/jpeg"
                                    name="profileImage"
                                    id="profileImage"
                                    className="text-sm outline-none border-[1px] border-red-800 py-3 rounded px-2 "
                                    onChange={changeHandler}
                                  //  {...register("profileImage")}
                                />
                                 
                            </div>
                            <div className="flex flex-col  gap-y-2 relative">
                                <label htmlFor="">Your Feedback <sup>*</sup></label>
                                <textarea
                                 name="feedback" 
                                 id="feedback"
                                 rows="7"
                                 className="text-sm outline-none border-[1px] border-red-800 py-3 rounded px-2 "
                                 placeholder="Your Feedback..."
                                 {...register("feedback",{required:true})}
                                 >
                                 </textarea>
                                 {
                                        errors.feedback && (
                                            <span className="text-sm  bg-bgColor text-secondaryColor px-5 py-1 rounded animate-bounce" >Please give your feedback</span>
                                        )
                                }
                            </div>
                             <div>
                                <button type="submit" className="text-secondaryColor bg-bgColor rounded-md px-20 py-3 hover:bg-opacity-90 hover:text-opacity-90 hover:scale-95 focus:outline-none duration-200">Send</button>
                             </div>

                    </div>
                </form>
                <div>
                    <p className="text-4xl mb-10 text-bgColor font-titleFont font-medium  underline-offset-8 " >Our Feedback</p>
                    
                    <div>
                         <FeedbackSlider/>
                        
                    </div>
                </div>
            </div>
            
        </div>
            <div>
                {
                    popup && <Popup   bkFormData={bkFormData} setPopup={setPopup} />
                }
            </div>
        <Contact/>
    </div>
  )
}

export default FeedbackForm
