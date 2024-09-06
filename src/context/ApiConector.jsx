//  import { useContext } from "react";
// import { AppContext } from "./AppContext";
// const {setLoading} = useContext(AppContext);

 
 
// const BASE_URL = process.env.REACT_APP_BASE_URL;

// if (!BASE_URL) {
//   throw new Error('BASE_URL is not defined');
// }

// export const postData = async (data) => {
  
//   try {
//     const response = await fetch(`${BASE_URL}/createProject`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ ...data }),
//     });

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status}`);
//     }

//     const responseData = await response.json();
//     return responseData;
//   } catch (error) {
//     console.error(error);
//     throw error; // rethrow the error
//   }
// };
 
// -------------------- get all project/notes/feedback data -----------------------------
 
export const getData = async(url) =>{
  // setLoading(true);
    try{
      const response =await fetch(url);
      const data = await response.json();
      return data;
      
    }
    catch(error){
      console.log(error);
      throw error;//rethrow the error
      
    }
}
// ----------------------------------- end --------------------------


// --------------------- Send all Notes and pdf api ------------------
 ;
import { toast } from "react-toastify";
export const SendData = async(url,formData) =>{
           
            const toastId = toast.loading("Processing");
            try{
              const response = await fetch(url,{
                method:'POST',
                body:formData,
              });
              const result = await response.json();
              toast.dismiss(toastId);
              if(!response.ok){
                  toast.error(result.message);
                  return result.message
              }
              
             // console.log("Form response:", result);
              toast.success("Notes Uploaded Successfully");
              return result;
            }

          catch(error){
          toast.dismiss(toastId);
          console.log(error);
          toast.error(`Form Submission fail due to internal server error`);
          return error
          }
        
}

// Delete Notes 
export const DeleteNotes = async(url,id)=>{
 const response = await fetch('https://example.com/delete-item/' + id, {
    method: 'DELETE',
  })
  .then(res => res.text()) // or res.json()
  .then(res => console.log(res))
}
 