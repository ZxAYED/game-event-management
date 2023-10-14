import React from 'react';
import bg from '../../images/wall.jpg'
import img from '../../images/bg1.jpg'
import { useLoaderData } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Cards from './cards';
import { ToastContainer } from 'react-toastify';


const Home = () => {
    const data =useLoaderData()
    useEffect(()=>{
        Aos.init({duration:500});
    },[])
    return (
        <div>
            <div className="hero " >
                <img className='object-cover h-[400px] w-full' src={img} alt="" />
                <div className="hero-overlay opacity-100 "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-white max-w-3xl">

                        <h1 className="mb-5 text-5xl font-bold rounded  py-2   ">Esports event management</h1>
                        <p className="mb-5 text-xl">Celebrate Your Passion for Gaming with Us! Your One-Stop Destination for Spectacular Gaming Events, Competitions, and Community.</p>
                    
                    </div>
                </div>
            </div>
            <section className='max-w-7xl mx-auto pt-32 flex lg:flex-row px-10 lg:px-0  flex-col justify-center items-center gap-4'>
                <div className='max-w-3xl md:pr-20'>
                    <h1 className='text-4xl text-[#BE006B]  pb-5 font-semibold '>Everyone plays video games!</h1>
                    <p className='text-xl'>Whether you want to advertise your brand and its products, launch a new game title or just throw an awesome party for influencers, your community, or employees, an Esports Event is one of the best ways to engage directly with your target audience.
                        <br /> <br />
                        <span className='text-[#BE006B]' >ZxAYED</span> has created more than 400 gaming events and counting: from smaller closed-type events to arena-sized events for audiences of 10,000+ people! Our world-class experience is second to none and we will work with you to achieve your goals and create an amazing and memorable event.</p>
                </div>
                <div className='flex-1'>
                    <img className='rounded-xl object-cover  ' src={bg} ></img>
                </div>

            </section>
            <section className='py-20 max-w-7xl mx-auto'>
                <h1 className='text-center text-3xl py-10 text-[#BE006B] font-semibold'>Explore Epic Game Championships and Tournaments: Your Ultimate Event Hub</h1>
            <div  className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 ' >
                {
                    data.map((item)=><Cards key={item.id} item={item} ></Cards>
                    )
                }
                
            </div>
            <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                  />
            </section>
        
        </div>
    );
};

export default Home;