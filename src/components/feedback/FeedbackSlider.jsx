import React, { Component, useContext} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppContext } from "../../context/AppContext";
import { IoStar } from "react-icons/io5";

function FeedbackSlider({data}) {
    const {feedbackFormData} = useContext(AppContext)
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 1124,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay:true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
             
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="flex flex-col justify-center mb-10">
      <Slider {...settings}>
         {
            feedbackFormData?.map((data,index) =>{
                return (<div key={index} className="flex items-center justify-center px-5">
                        <div className="flex flex-col items-center ">
                            <div className="w-[100px] z-30 h-full rounded-full flex items-center justify-center ">
                                <img src={data.profileImage} alt={data.profileImage} className="aspect-square rounded-full object-cover max-w-3/4" />
                            </div>
                            <div className="w-full min-h-[170px] bg-gray-200 flex flex-col items-center -mt-7 pt-10 gap-2 px-10 pb-2">
                                <h2 className="text-bgColor text-xl font-titleFont font-bold">{data.firstName} {data.lastName}</h2>
                                <p className="font-bodyFont font-medium text-primaryColor text-justify"><span className="text-3xl">"</span> {data.feedback}<span className="text-3xl">"</span></p>
                                <div className="w-full flex justify-end h-full text-lg items-end text-yellow-400">
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                </div>
                            </div>
                        </div>
                </div>)
            })
         }
         
         
      </Slider>
    </div>
  );
}

export default FeedbackSlider;
