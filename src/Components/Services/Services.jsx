import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Service from './Service';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const data = useLoaderData();


    useEffect(()=>{
        Aos.init({duration:1000});
    },[])




    return (
        <div className='mx-10 lg:mx-auto'>
            <div className='text-center pt-20 max-w-6xl mx-auto'>
                <h1 className='text-[#BE006B] text-4xl font-bold' >Elevate Your Game Events with Our Expert Services</h1>
                <p className='pt-4 text-xl' >Welcome to <span className='text-[#BE006B] text-lg font-semibold '>ZxAYED</span> your one-stop destination for managing and enhancing your game events. We're here to ensure your gaming gatherings are not only seamless but truly unforgettable. Our range of services is designed to take your game events to the next level.</p>
            </div>
        <div className='max-w-7xl mx-auto md:grid-cols-2 grid-cols-1  grid lg:grid-cols-3 py-20 gap-5 ' data-aos="zoom-in">


            {
                data && data.map((item) =>  <Service key={item.id} item={item}></Service> )
                

            }



</div>

        </div>



    );
};

export default Services;