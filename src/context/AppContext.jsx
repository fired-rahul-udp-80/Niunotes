import { createContext, useEffect, useState } from "react";
import { navItems,notesBook } from "../data"; 
import { getData } from "./ApiConector";
import { projectAPI,prevQuestionApi } from "./AllApi";
 

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [navItems1,setNavItems1] = useState(navItems);
    const [notesBook1,setNotesBook1] = useState(notesBook);
    const [privateRoute, setPrivateRoute] = useState(false);
    

    const [projectList,setProjectList] = useState();
    const [loading, setLoading] = useState(false);
    const [feedbackFormData, setFeedBackFormData] = useState();
    const [subNotes, setSubNotes] = useState();
     

    
    
     
    
    const value = {
    navItems1,
    notesBook1,
    projectList,
    loading,
    feedbackFormData,
    privateRoute,
    setPrivateRoute,


    // get function 
    getAllProject,
    getAllFeedback,

    getThirdSem,
    getFourthSem,
    getFifthSem,
    getSixthSem,
    getSeventhSem,
    getEighthSem,
    subNotes,

    getThirdSemQuest,
    getFourthSemQuest,
    getFifthSemQuest,
    getSixthSemQuest,
    getSeventhSemQuest,
    getEighthSemQuest,
     
    

};

async function getAllProject() {
    setLoading(true);
    const result = await getData(projectAPI.GETPROJECT);
    const dataArray = result.data;
    console.log(dataArray);
    setLoading(false);
    setProjectList(dataArray);
  }

// ----------------- getFeedbackFormData -----------------------

async function getAllFeedback(){
    setLoading(true);
    const response = await getData(projectAPI.GETFEEDFORM);
    const result = response.data;
    setLoading(false);
    setFeedBackFormData(result);
    console.log(result);
}

//----------------- get Semester Notes Data ------------------------

async function getThirdSem(){
    setLoading(true);
    const response = await getData(projectAPI.GETTHIRDSEM);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("thirdsem",result);
}
async function getFourthSem(){
    setLoading(true);
    const response = await getData(projectAPI.GETFOURTHSEM);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("fourth",result);
}
async function getFifthSem(){
    setLoading(true);
    const response = await getData(projectAPI.GETFIFTHSEM);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("fifth",result);
}
async function getSixthSem(){
    setLoading(true);
    const response = await getData(projectAPI.GETSIXTHSEM);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("sixth",result);
}
async function getSeventhSem(){
    setLoading(true);
    const response = await getData(projectAPI.GETSEVENTHSEM);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("seventn",result);
}
async function getEighthSem(){
    setLoading(true);
    const response = await getData(projectAPI.GETEIGHTHSEM);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("eigth",result);
}
// ------------------------- end ------------------------------------

// ------------------ Prevoius Year Question Paper --------------------------------
async function getThirdSemQuest(){
    setLoading(true);
    const response = await getData(prevQuestionApi.GETTHIRDSEMQUEST);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("thirdsemQuest",result);
}

async function getFourthSemQuest(){
    setLoading(true);
    const response = await getData(prevQuestionApi.GETFOURTHSEMQUEST);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("FourthsemQuest",result);
}

async function getFifthSemQuest(){
    setLoading(true);
    const response = await getData(prevQuestionApi.GETFIFTHSEMQUEST);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("FifthsemQuest",result);
}
async function getSixthSemQuest(){
    setLoading(true);
    const response = await getData(prevQuestionApi.GETSIXTHSEMQUEST);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("sixthsemQuest",result);
}

async function getSeventhSemQuest(){
    setLoading(true);
    const response = await getData(prevQuestionApi.GETSEVENTHSEMQUEST);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("SeventhsemQuest",result);
}
async function getEighthSemQuest(){
    setLoading(true);
    const response = await getData(prevQuestionApi.GETEIGHTHSEMQUEST);
    const result = response.data;
    setSubNotes(result);
    setLoading(false);
    console.log("EigthsemQuest",result);
}

// useEffect( () =>{
//     getThirdSemQuest();
//     getFourthSemQuest();
//     getFifthSemQuest();
//     getSixthSemQuest();
//     getSeventhSemQuest();
//     getEighthSemQuest();
// },[]);



   

return <AppContext.Provider value={value}>
    {children}
</AppContext.Provider>


}

 