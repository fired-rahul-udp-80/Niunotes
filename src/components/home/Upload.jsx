import React from 'react'
import { MdCloudUpload } from "react-icons/md";
import { Link } from 'react-router-dom';
const Upload = () => {
  return (
    <div className="w-full px-5">
        <div className="upload-image flex flex-col justify-center items-center p-10 w-full min-h-[400px] shadow-lg hover:shadow-2xl transition-shadow duration-300 font-bodyFont font-medium border">
            <h2 className="text-3xl hidden md:inline-flex mt-10 text-left">Upload Your Notes</h2>
            <p className="mt-16 md:mt-4">It's our responsibility to keep updated by uploading active study related documents.
            <p> Your little bit times makes it attractive.</p>
                <Link to="/pages/upload-notes">
                  <div className="flex flex-col justify-center items-center gap-y-5">
                      <MdCloudUpload className="text-8xl text-bgColor"/>
                      <div className="px-7 py-5 bg-bgColor rounded-xl text-secondaryColor font-titleFont text-xl flex justify-center font-bold items-center hover:opacity-80 relative">
                          Upload
                      <input type="file" className="bg-bgColor opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer "/>
                      </div>
                  </div>
                </Link>
            </p>
        </div>
    </div>
  )
}

export default Upload
