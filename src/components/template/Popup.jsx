import React, { useEffect } from 'react'
 

const Popup = ({bkFormData,setPopup}) => {

    useEffect(()=>{
        if(bkFormData){
            const timeOut = setTimeout( () =>{
                setPopup(false);
            },4000);
        }
    },[bkFormData]);
   
    
  return (
    <div onClick = {() =>setPopup(false)} className="w-screen h-full px-10 inset backdrop-blur-sm fixed top-0 flex justify-center items-center">

        <div className="flex justify-center items-center bg-bgColor relative
        min-h-[300px] w-full gap-y-2 md:w-[500px] animate-bounce rounded-md shadow-2xl flex-col ">
            {/* <div
            onClick = {() =>setPopup(false)}
            class="absolute top-2 right-2 text-3xl text-white hover:bg-secondaryColor hover:text-primaryColor duration-200 rounded-md cursor-pointer">
            <MdOutlineClose />
            </div> */}
            <p className="text-4xl text-white font-titleFont">Thank your </p>
            <p className="text-yellow-600 font-bold text-2xl font-titleFont" >{bkFormData.firstName}{" "} {bkFormData.lastName}</p>
             
            <p className="text-xl text-white font-titleFont">for your feedback.</p>
        </div>
    </div>
  )
}

export default Popup