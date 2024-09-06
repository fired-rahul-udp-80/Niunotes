import React,{useState} from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaBackwardStep } from "react-icons/fa6";
import { allSemester } from '../../data';
import {projectAPI,prevQuestionApi} from "../../context/AllApi"
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { SendData } from '../../context/ApiConector';
 

const UploadNotes = () => {
    const [semSub, setSemSub] = useState();
    const [file, setFile] = useState();
    const [semester,setSemester] = useState();

    const {
        register,
        handleSubmit,
        reset,
        formState:{errors,isSubmitSuccessful} } = useForm();
     const navigate = useNavigate();
    
     const changeHandler = (event)=>{
        const file = event.target.files[0];
        setFile(file);

     }
     
      
     const submitHandler =async (data) =>{
        try{
            const formData = new FormData();
           // console.log("data",data);
            formData.append('semester',semester);
            formData.append('notes', file);
            formData.append('name',data.name[0].toUpperCase()+data.name.substring(1));
            formData.append('email',data.email.toLowerCase())
            formData.append('subDes',data.subDes);
            formData.append('subjectName', data.subjectName); 

            const getSemester =formData.get('semester');
            const getSubject = formData.get('subjectName');
          //  console.log(typeof(getSemester));
            console.log(getSemester,getSubject);
            if((getSemester.includes("3rd semester")) && (!getSubject.includes("Previous Year Question Paper"))){
                const response  = await SendData(projectAPI.POSTTHIRDSEM,formData);
                console.log("Form response",response);
                navigate("/");
                return 
            }
            else if((getSemester.includes("4th semester")) && (!getSubject.includes("Previous Year Question Paper"))){
                const response  = await SendData(projectAPI.POSTFOURTHSEM,formData);
                console.log("Form response",response);
                navigate("/");
                return 
            }
            else if((getSemester.includes("5th semester")) && (!getSubject.includes("Previous Year Question Paper"))){
                const response  = await SendData(projectAPI.POSTFIFTHSEM,formData);
                console.log("Form response",response);
                navigate("/");
                return 
            }
            else if((getSemester.includes("6th semester")) && (!getSubject.includes("Previous Year Question Paper"))){
                const response  = await SendData(projectAPI.POSTSIXTHSEM,formData);
                console.log("Form response",response);
                navigate("/");
                return 
            }
            else if((getSemester.includes("7th semester")) && (!getSubject.includes("Previous Year Question Paper"))){
                const response  = await SendData(projectAPI.POSTSEVENTHSEM,formData);
                console.log("Form response",response);
                if((!response.includes("Error while creating seven sem data")) || (!response.includes("File type is not supported"))){
                    navigate("/");
                }
                return 
            }
            else if((getSemester.includes("8th semester")) && (!getSubject.includes("Previous Year Question Paper"))){
                const response  = await SendData(projectAPI.POSTEIGHTHSEM,formData);
                console.log("Form response",response);
                navigate("/");
                return 
            }
            else if((getSemester.includes("3rd semester")) && (getSubject.includes("Previous Year Question Paper"))){
                const response = await SendData(prevQuestionApi.POSTTHIRDSEMQUEST,formData);
                console.log("Form response",response);
                navigate("/");
                return 
            }
            else if((getSemester.includes("4th semester")) && (getSubject.includes("Previous Year Question Paper"))){
                const response = await SendData(prevQuestionApi.POSTFOURTHSEMQUEST,formData);
                console.log("Form response",response);
                navigate("/");
                return 
            }
            else if((getSemester.includes("5th semester")) && (getSubject.includes("Previous Year Question Paper"))){
                const response = await SendData(prevQuestionApi.POSTFIFTHSEMQUEST,formData);
                console.log("Form response",response);
                navigate("/");
                return 
            }
            else if((getSemester.includes("6th semester")) && (getSubject.includes("Previous Year Question Paper"))){
                const response = await SendData(prevQuestionApi.POSTSIXTHSEMQUEST,formData);
                console.log("Form response",response);
                navigate("/");
                return 
            }
            else if((getSemester.includes("7th semester")) && (getSubject.includes("Previous Year Question Paper"))){
                const response = await SendData(prevQuestionApi.POSTSEVENTHSEMQUEST,formData);
                console.log("Form response",response);
                navigate("/");
                return 
            }
            else{
                const response = await SendData(prevQuestionApi.POSTEIGHTHSEMQUEST,formData);
                console.log("Form response",response);
                navigate("/");
            }       
        } 
        catch(error){
            console.log(error);
             
        }
     }
    const selectSemester = (semester) =>{
        
        setSemester(semester.target.value);
       // console.log(semester.target.value);
       // console.log('semeseter',semester);
        const getSemester = allSemester.filter((value) =>{
            return value.semester == semester.target.value;  
        });
        setSemSub(getSemester);
            
    }


  return (
    <div className="mt-10" >
        <div className="max-w-[1160px] mx-auto space-y-5 px-5">
            <h2 className="bg-bgColor text-xl  text-secondaryColor text-center font-titleFont py-5 rounded-md">Upload your Documents</h2>
            <div>
            <div onClick={() =>navigate(-1)}
                className="flex gap-1 mt-2 items-center text-xl mb-2 cursor-pointer underline underline-offset-4 justify-start w-fit text-bgColor font-titleFont font-bold hover:opacity-80">
                            
                 <FaBackwardStep />
                 Back
            </div>
            <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="w-full text-xl font-medium font-titleFont text-primaryColor flex flex-col gap-y-5 mb-10">
                         
                            <div className="flex flex-col gap-y-2 relative">
                                <label htmlFor="name">Name<sup>*</sup></label>
                                <input type="text"
                                    name="name"
                                    id="name"
                                    className=" text-sm outline-none border-[1px]  border-red-800 py-3 rounded px-2"
                                    placeholder="Enter name"
                                    {...register("name",{required:true})} 
                                />
                                {
                                    errors.name && <span className="absolute top-2 bg-white animate-bounce text-red-600 text-sm font-bold font-bodyFont">Enter Name</span>
                                }
                                 
                            </div>

                             
                         
                        <div className=" flex flex-col  gap-y-2 relative">
                                <label htmlFor="email">Email Address <sup>*</sup></label>
                                <input type="email"
                                    name="email"
                                    id="email"
                                    className="text-sm outline-none border-[1px]  border-red-800 py-3 rounded px-2"
                                    placeholder="Enter email Address"
                                    {...register("email",{required:true})}
                                />
                                {
                                    errors.email && <span className="absolute top-2 bg-white animate-bounce text-red-600 text-sm font-bold font-bodyFont">Enter email address</span>
                                }
                                
                            </div>
                            <div className=" flex flex-col  gap-y-2 relative">
                                <label htmlFor="semester">Semester<sup>*</sup></label>
                                <select onChange = {selectSemester}
                                 name="semester" id="semester" className="text-sm outline-none border-[1px]  border-red-800 py-3 rounded px-2"
                                 //{...register("semester",{required:true})}
                                 >
                                 <option >Select Semester</option>
                                    {
                                        allSemester.map((data) =>(
                                            <option key = {data.id} value = {data.semester}>{data.semester}</option>
                                        ))
                                    }
                                </select> 
                                {/* {
                                    errors.semester && (
                                        <span className="absolute top-2 bg-white animate-bounce text-red-600 text-sm font-bold font-bodyFont">Choose semester</span>
                                    )
                                } */}
                                   
                            </div>
                            <div className=" flex flex-col  gap-y-2 relative">
                                <label htmlFor="subjectName">Subject Name <span>*</span></label>
                                 <select
                                  {...register("subjectName",{required:true})}
                                  placeholder="select subject name"
                                 name="subjectName" id="subjectName" className="text-sm outline-none border-[1px]  border-red-800 py-3 rounded px-2"
                                 >
                                     <option value="">select subject</option>
                                 {
                                    semSub ? semSub.map((value) =>(
                                        value?.subject.map((sub,index)=>(
                                            <option key={index} value={sub}>{sub}</option>
                                        ))
                                    )):null
                                 }
                                 </select>
                                 {
                                    errors.subjectName && (
                                        <span className="absolute top-2 bg-white animate-bounce text-red-600 text-sm font-bold font-bodyFont">Choose subject name</span>
                                    )
                                }
                                 
                            </div>
                            <div className=" flex flex-col  gap-y-2">
                                <label htmlFor="notes">Upload (pdf) <span>*</span></label>
                                <input type="file"
                                    name="notes"
                                    id="notes"
                                    className="text-sm outline-none border-[1px] border-red-800 py-3 rounded px-2 "
                                    onChange={changeHandler}
                                     
                                />
                                 
                            </div>
                            <div className="flex flex-col  gap-y-2 relative">
                                <label htmlFor="subDes">Subject Description <span className="opacity-50">( Optional )</span>
                                </label>
                                <textarea
                                 name="subDes" 
                                 id="subDes"
                                 rows="4"
                                 className="text-sm outline-none border-[1px] border-red-800 py-3 rounded px-2 "
                                 placeholder="Description..."
                                 {...register("subDes")}
                                 >
                                 </textarea>
                                  
                            </div>
                            <button 
                            type="submit" 
                            className="flex items-center gap-2 justify-center text-secondaryColor bg-bgColor rounded-md px-20 py-3 hover:bg-opacity-90 hover:text-opacity-90 hover:scale-95 focus:outline-none duration-200">
                            Upload  <FaCloudUploadAlt/></button>
                            
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UploadNotes