import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import News from './News';
import Service from './Service';

const Services = () => {
    const items =useLoaderData();
    const[data,setData]=useState([])
    useEffect(()=>{

        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setData(data))
       console.log(data);

    },[])
  
    
    return (
       <div className='max-w-7xl mx-auto'>

        <section >
            {/* data.map((item)=>{}) */}
            <Service></Service>
        
        </section>

         <div  className=''>    <h1 className="text-3xl pt-10 text-[#BE006B] font-bold  text-center">NewsSphere: Where Every Pixel Tells a Story</h1>
           <p className="py-3 text-center text-xl ">
           This Section suggests a dynamic and immersive gaming experience, where every piece of news and content is a part of the larger gaming universe. It also conveys the idea that in the world of gaming, every pixel on the screen has its own exciting story to share.</p></div>
           <div className='grid grid-cols-2 gap-4  py-10'>
     {
      
        items.map(items=><News key={items.id} items={items}></News>
           
          
  )}
  </div>
        
        </div>
     
    );
};

export default Services;