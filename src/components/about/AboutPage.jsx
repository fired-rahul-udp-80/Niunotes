import React from 'react'
import { SiOpenlayers } from "react-icons/si";
import Contact from '../home/Contact';
 
import Title from '../template/Title';
const AboutPage = () => {
  return (
    <div>
       <Title
          title = "About Us"
          icon = {<SiOpenlayers/>}
       />
        <div>
            <Contact path ="/contact"  />
        </div>
    </div>
  )
}

export default AboutPage