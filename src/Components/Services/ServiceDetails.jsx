import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const items =useLoaderData();
    const {id}= useParams()
   
    console.log('ideita',id,'items',items);
   const item =items.find(job=>job.id==id)
    return (
 
 
        <div   className=" max-w-7xl mx-auto flex flex-col p-4 mb-10 md:p-0 gap-4 shadow-2xl">
        <div className="">
           
                <img src={item.image} className="md:p-4  h-[50vh] md:h-[80vh]  w-full rounded-xl object-fit md:h-shadow-2xl " /></div>
       
        <div className=' md:pl-5 justify-center pb-10 md:pr-10 flex flex-col md:gap-2'>
            <h3 className='w-fit text-3xl text-[#BE006B] text-bold ' >{item.title}</h3>
            <h1  className='text-xl md:text-xl'>{item.description}</h1>
            <p className='text-xl' > Price : <span
            className="text-[#BE006B]">{item.price} to 20000$</span></p>
            
            <p className='text-xl' >Rollment System: <span
            className="text-[#BE006B]"> {item.howToJoin} </span>   </p>
            <div className="flex justify-between">
                 <p className='text-xl ' >Registration availablity:<span
            className="text-[#BE006B]"> Yes </span>   </p>
                 
            
            </div>
           
            
        </div>
        
    </div>

     
    );
};

export default ServiceDetails;