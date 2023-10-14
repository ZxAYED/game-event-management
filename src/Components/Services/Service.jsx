
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
const Service = ({item}) => {
    useEffect(()=>{
        Aos.init({duration:1000});
    },[])

    const { id,title, description, price, moreDetails, howToJoin, image } = item

    return (
        <div>
              
            <div className="m-auto relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-[660px] bg-slate-900 " data-aos="fade-up"
     data-aos-duration="1000">
                <a href="#" className="block w-full h-full">
                    <img alt="blog photo" src={image} className="object-cover w-full h-60" />
                    <div className="w-full px-6  ">
                        <p className="font-semibold py-4 text-3xl text-[#BE006B]">
                            {title}
                        </p>
                      
                        <p className="font-light  text-md">
                            {description}
                        </p>
                        <p className=" py-2 font-light  text-md">
                    {moreDetails}
                        </p>
                        <p className="font-light  text-md">
                          Sign UP Money : {price}
                        </p>
                        <p className="font-light  py-2 text-md">
                            {howToJoin}
                        </p>
                        { <Link to={`/service/${id}`}>
                        <button
              className=" absolute bottom-5 mx-auto right-0 top-auto left-0 w-[80%]  py-3 rounded border flex items-center justify-center transition bg-[#BE006B] duration-300 btn   hover:border-purple-800   text-white "
            >Register NoW ! </button></Link>}
                    </div>
                </a>
            </div>

            
        </div>
    );
};

export default Service;