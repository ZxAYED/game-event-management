import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const items =useLoaderData();
    const {id}= useParams()
   
    const item =items.find(job=>job.id==id)
    console.log(item);
  
    return (
        <div   className=" max-w-7xl mx-auto flex flex-col p-4 mb-10 md:p-0 gap-4 shadow-2xl">
        <div className="">
           
                <img src={item.image} className="md:p-4  h-[50vh] md:h-[80vh]  w-full rounded-xl object-fit md:h-shadow-2xl " /></div>
       
        <div className=' md:pl-5 justify-center pb-10 md:pr-10 flex flex-col md:gap-2'>
            <h3 className='w-fit text-3xl text-[#BE006B] text-bold ' >{item.title}</h3>
            <h1  className='text-xl md:text-xl'>{item.description}</h1>
            <p className='text-xl' > Prize-Pool : <span
            className="text-[#BE006B]">{item.price}000 $ </span></p>
            <p className='text-xl' >Tournament date:  <span
            className="text-[#BE006B]"> {item.date} </span>   </p>
            <p className='text-xl' >Tournament Location: <span
            className="text-[#BE006B]"> {item.location} </span>   </p>
            <div className="flex justify-between">
                 <p className='text-xl ' >Registration availablity:<span
            className="text-[#BE006B]"> {item.registrationOpen ?'Yes':'No'} </span>   </p>
                 <p className='text-xl ' >Total participated teams:<span
            className="text-[#BE006B]"> {item.participants} </span>   </p>
            
            
            </div>
           
            
        </div>
        
    </div>
    );
};

export default CardDetails;