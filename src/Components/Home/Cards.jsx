import { Link } from "react-router-dom";


const Cards = ({item}) => {
    const {date,id,price,image,location,
        participants,registrationOpen,title,description}=item
      
    return (
        <div >
          { <Link to={`/details/${id}`}>
             <div className="relative overflow-hidden "   >
      <div className="w-full h-60 bg-cover  text-white bg-center transition-transform  scale-100 hover:scale-105 hover:bg-[#BE006B] duration-1000">
        <img className=' object-fit' src={image} alt="" />
        <div className="absolute inset-0 hover:bg-[#2b031a]  hover:bg-opacity-50 transition-opacity opacity-0 hover:opacity-100 duration-1000">
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <h2 className=" text-xl font-semibold opacity-100"> {title}</h2>
            <p className=" text-sm">{description}</p>
            <div className="flex items-center justify-between  text-sm mt-2">
              <span className="bg-[#BE006B] px-2 py-1 rounded-sm "  >Reward:{price}000$</span>
              <span  className="bg-[#BE006B] px-2 py-1 rounded-sm">Event-Date:{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div></Link>}
        </div>
    );
};

export default Cards;