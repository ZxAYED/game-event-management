import React, { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import 'aos/dist/aos.css'
import Aos from 'aos';
const NewsDetails = ({items}) => {
  const { title, description, views, prizeMoney, registrationInfo } = items;
  useEffect(()=>{
    Aos.init({duration:1000});
},[])
  return (
    <div>
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"
 className="rounded-lg md:h-[400px] mx-10 lg:mx-auto lg:h-80 border border-purple-500 overflow-hidden shadow-md ">
        <div className=" text-white py-2 px-4">
          <h1 className="text-2xl font-semibold text-[#BE006B] ">{title}</h1>
        </div>
        <div className="p-4">
          <p className=" text-xl leading-relaxed mb-4">{description}</p>
          <div className="flex justify-between text-lg ">
            <p className=" text-lg  py-4 ">Views: {views}</p>
            <p className="text-lg  py-4">Prize Money: ${prizeMoney}</p>
          </div>
        
          <p className="text-lg ">{registrationInfo}</p>
         
        </div>


      </div>

    </div>
  );
};

export default NewsDetails;