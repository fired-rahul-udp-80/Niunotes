import { useState,useEffect } from 'react'
 
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Previous_que from './components/prev_year-que/Previous_que'
import Home from './components/home/Home'
import AboutPage from './components/about/AboutPage'
import AllSubNotes from './components/home/AllSubNotes'
import NotesPage from './components/notes/NotesPage'
import UploadForm from './components/home/UploadNotes'
import FeedbackForm from './components/feedback/FeedbackForm'
import MainPageLoader from './components/template/MainPageLoader'
import PrivateRoute from './components/template/PrivateRoute'
 
 

function App() {
  const [isLoading, setIsLoading] = useState(true);
  function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  } 

  useEffect(() => {
    someRequest().then(() => {
      setIsLoading(false);

      
    });
  });

  if (isLoading) { //
    return (
      <div>
        <MainPageLoader />
      </div>
    );
  }

 

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/" index element = {<Home/>}  />
            <Route path="/pages/about" element = {<AboutPage/>}  />
            <Route path="/pages/previous-year" element = {<Previous_que/>}  />
               
            <Route path="/pages/notes" element={<NotesPage/>} />
            <Route path="/pages/feedback" element={<FeedbackForm/>} />
            <Route path="*" element ={<h1>404 Error page not found</h1>}/>
             

             {/* upload form router  */}
           
             <Route path="/pages/upload-notes" element={<UploadForm/>} />

             <Route path="/semesterNotes" element={
              <PrivateRoute>
                <AllSubNotes/>
              </PrivateRoute>
             } />
             <Route path="/pages/notes/semesterNotes" element={
              <PrivateRoute>
                <AllSubNotes/>
              </PrivateRoute>
             } />
             <Route path="/pages/previous-year/previous-year-question-paper" element={
              <PrivateRoute>
                <AllSubNotes/>
              </PrivateRoute>
             } />
          </Routes>
         


         
          
        </div>
         
      </div>
    </>
  )
}

export default App
